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

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
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
              private facebookStorage: FacebookStorageService){  
    this.facebook.browserInit(this.APP_ID);
  }

  facebookLogin(){
    //console.log("intra");
    this.facebookService.facebookLogin();
    
  }
  
  getUserProfile(){


    this.facebookStorage.getUserProfile().subscribe(
      (res:IUserData)=>{
        
        this.userData.email = res.email;
        this.userData.first_name = res.first_name;
        this.userData.picture = res.picture.data.url;
        this.userData.last_name = res.last_name;
      });
  }
}

class UserData {
  email: string;  
  first_name: string;
  picture: string; 
  last_name: string;
}

interface IUserData {
  email: string;  
  first_name: string;
  last_name: string;
  picture: {
    data: {
      url: string;
    }
  }
}