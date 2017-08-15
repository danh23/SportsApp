import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { Content } from 'ionic-angular';
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
import { EditProfilePage } from "../editProfile/editProfile";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {
  @ViewChild("contentRef") contentHandle: Content;

  loggedIn:boolean;

  userData: UserData = new UserData;
  APP_ID: number = 1458461600876986;

  oauthBaseUrl = '';

  constructor(public navCtrl: NavController,
              private facebook:Facebook,
              public nativeStorage: NativeStorage,
              private http:Http, 
              private facebookService:FacebookLoginService,
              private facebookStorage: FacebookStorageService,
            private serviceData: ServerDataService){  
    this.facebook.browserInit(this.APP_ID);
  }

  ngOnInit(){

    //console.log("a intrat");
    this.getUserProfile();
  }

  facebookLogin(){
    this.facebookService.facebookLogin();
  }

  editProfile(){

    this.navCtrl.setRoot(EditProfilePage);
  }
  
  getUserProfile(){


    this.facebookStorage.getUserProfile().subscribe(
      (res:IUserData)=>{
        
        this.userData.email = res.email;
        this.userData.first_name = res.first_name;
        this.userData.picture = res.picture.data.url;
        this.userData.id = res.id;
        //this.userData.city = res.hometown.name;
        this.userData.last_name = res.last_name;

       // console.log(this.userData);
        if (this.facebookService.loggedIn() == false){
          this.serviceData.setUser(this.userData.first_name, this.userData.email, this.userData.id).subscribe(res => {
            console.log(res);
                });
              }
      });
  }
}

class UserData {
  email: string;  
  first_name: string;
  last_name: string;
  city: string;
  picture: string; 
  id: string;
}

interface IUserData {
  email: string;  
  first_name: string;
  last_name: string;
  hometown: {
      name: string;
  };
  id: string;
  picture: {
    data: {
      url: string;
    }
  }
}