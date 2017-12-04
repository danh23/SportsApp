import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { Content } from 'ionic-angular';
import { User } from '../../providers/user';
import { TranslateService } from '@ngx-translate/core';
import { Auth } from '@ionic/cloud-angular';
import { Facebook,FacebookLoginResponse } from "@ionic-native/facebook";
import { NativeStorage } from '@ionic-native/native-storage';
import { Http,RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { FacebookLoginService } from "../../services/facebookLoginService";
import { FacebookStorageService } from "../../services/facebookStorageService";
import { ProfilePage } from "../profile/profile";
import { ServerDataService } from "../../services/serverDataService";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
  @ViewChild("contentRef") contentHandle: Content;

  loginForm: FormGroup = new FormGroup ({
    username: new FormControl(),
    password: new FormControl()
  });

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

  facebookLogin(){
  }

  simpleLogin(){
    console.log(this.loginForm.controls.username.value);

  }
  
  signupPage(){
    this.navCtrl.setRoot(SignupPage);
  }
  
}

class UserData {
  email: string;  
  first_name: string;
  picture: string; 
  username: string;
  last_name:string;
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

