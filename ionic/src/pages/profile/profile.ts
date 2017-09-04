import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { Content, NavParams } from 'ionic-angular';
import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';
import { TranslateService } from '@ngx-translate/core';
import { Auth } from '@ionic/cloud-angular';
import { Facebook,FacebookLoginResponse } from "@ionic-native/facebook";
import { NativeStorage } from '@ionic-native/native-storage';
import { Http,RequestOptions,Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { FacebookLoginService } from "../../services/facebookLoginService";
import { FacebookStorageService } from "../../services/facebookStorageService";
import { ServerDataService } from "../../services/serverDataService";
import { EditProfilePage } from "../editProfile/editProfile";
import { ListSportsPage } from "../listSports/listSports";

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
              private serviceData: ServerDataService,
              public storage: NativeStorage,
              private navParams: NavParams){  
    this.facebook.browserInit(this.APP_ID);
  }

  ngOnInit(){

    let email = this.navParams.get('email');
    if (email!= null)//vine de la signup
       this.getUserProfileSignup(email);
    else
      this.getUserProfile();
  }

  facebookLogin(){
    this.facebookService.facebookLogin();
  }

  getUserProfileSignup(email){

    console.log(email);
    this.serviceData.getUserByEmail(email).subscribe(
      (res:IUserData)=>{
        
        this.userData.email = res.email;
        this.userData.first_name = res.first_name;
        this.userData.city = "Bucuresti";
        this.userData.last_name = res.last_name;
        this.userData.username = res.username;
      });
  }

  editProfile(){

    this.navCtrl.setRoot(EditProfilePage);
  }

  getUserSports(){
    
        this.navCtrl.setRoot(ListSportsPage);
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
 // this.serviceData.setUser(this.userData.username,this.userData.email, this.userData.facebookId, this.userData.first_name, this.userData.last_name, this.userData.city).subscribe(res => {
  //});
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