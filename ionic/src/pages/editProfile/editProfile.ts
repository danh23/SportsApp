import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { Content, ActionSheetController, Platform, LoadingController, Loading } from 'ionic-angular';
import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';
import { TranslateService } from '@ngx-translate/core';
import { Auth } from '@ionic/cloud-angular';
import { Facebook,FacebookLoginResponse } from "@ionic-native/facebook";
import { NativeStorage } from '@ionic-native/native-storage';
import { Http,RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { FacebookLoginService } from "../../services/facebookLoginService";
import { FacebookStorageService } from "../../services/facebookStorageService";
import { ServerDataService } from "../../services/serverDataService";
import { ProfilePage } from "../profile/profile";
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

declare var cordova: any;

@Component({
  selector: 'page-editProfile',
  templateUrl: 'editProfile.html',
})
export class EditProfilePage implements OnInit {
  @ViewChild("contentRef") contentHandle: Content;

  loggedIn:boolean;

  userData: UserData = new UserData;
  APP_ID: number = 1458461600876986;
  lastImage: string = null;
  loading: Loading;
  editProfileForm: FormGroup = new FormGroup ({
    username: new FormControl(),
    lastName: new FormControl(),
    firstName: new FormControl(),
    city: new FormControl()
  });


  oauthBaseUrl = '';

  constructor(public navCtrl: NavController,
              private facebook:Facebook,
              public nativeStorage: NativeStorage,
              private http:Http, 
              private facebookService:FacebookLoginService,
              private facebookStorage: FacebookStorageService,
              private serviceData: ServerDataService,
              private camera: Camera,
              private transfer: Transfer,
              private file: File, 
              private filePath: FilePath, 
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController, 
              public platform: Platform, 
              public loadingCtrl: LoadingController,
              public formBuilder: FormBuilder){  
    
                this.facebook.browserInit(this.APP_ID);

  }

  ngOnInit(){

     
    
    this.getUserProfile();
  }

  usernameValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return {invalidName: true};
    }
  }

  backButton(){
    this.navCtrl.setRoot(ProfilePage);
  }

  saveEditProfile(){
   
    //console.log(this.editProfileForm);
    //console.log(this.editProfileForm.controls.username.value);
    //console.log(this.userData.first_name);
   // console.log(this.editProfileForm.controls.username.value,);
    this.serviceData.setUser(this.editProfileForm.controls.username.value, this.userData.email, this.userData.facebookId, this.userData.first_name, this.userData.last_name, this.userData.city).subscribe(res=>{
    });
    this.navCtrl.setRoot(ProfilePage);
  }

  getUserProfile(){


    this.facebookStorage.getUserProfile().subscribe(
      (res:IUserData)=>{
        
        this.userData.email = res.email;
        this.userData.first_name = res.first_name;
        this.userData.picture = res.picture.data.url;
        this.userData.facebookId = res.facebookId;
        this.userData.city = "Bucuresti";
        this.userData.last_name = res.last_name;
        this.userData.username = res.username;
      });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
   
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
   
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
   
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  public uploadImage() {
    // Destination URL
    var url = "http://yoururl/upload.php";
   
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
   
    // File name only
    var filename = this.lastImage;
   
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }


}

class UserData {
  email: string;  
  first_name: string;
  last_name: string;
  city: string;
  picture: string; 
  facebookId: string;
  username: string;
}

interface IUserData {
  email: string;  
  first_name: string;
  last_name: string;
  facebookId: string;
  username: string;
  picture: {
    data: {
      url: string;
    }
  }

}