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
  selector: 'page-userProfile',
  templateUrl: 'userProfile.html',
})
export class UserProfilePage implements OnInit {
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
              public serverData: ServerDataService,
              private navParams: NavParams){  
    this.facebook.browserInit(this.APP_ID);
  }

  ngOnInit(){

    let email = this.navParams.get('email');
    //console.log("a intrat");
    this.getUserProfile(email);
  }

 getUserProfile(email){



  this.serverData.getUserByEmail(email).subscribe(
    (res:IUserData)=>{
     // console.log(res);
      this.userData.email = res.email;
      this.userData.first_name = res.firstName;
      //this.userData.picture = res.picture.data.url;
      this.userData.facebookId = res.facebookId;
      this.userData.city = "Bucuresti";
      this.userData.last_name = res.lastName;
      this.userData.username = res.username;
    });
  
  }
}

class UserData {
  email: string;  
  first_name: string;
  last_name: string;
  city: string;
  facebookId: string;
  username: string;
}

interface IUserData {
  email: string;  
  firstName: string;
  lastName: string;
  facebookId: string;
  username: string;
  
}