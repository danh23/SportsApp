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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
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

  ngOnInit(){

    //console.log("a intrat");
    this.getUserProfile();
  }

  facebookLogin(){
    this.facebookService.facebookLogin();
  }
  
  getUserProfile(){


    
    
  }
}

class UserData {
  email: string;  
  first_name: string;
  picture: string; 
}

interface IUserData {
  email: string;  
  first_name: string;
  picture: {
    data: {
      url: string;
    }
  }
}