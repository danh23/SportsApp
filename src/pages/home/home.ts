import { Component, ViewChild } from '@angular/core';
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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FacebookLoginService]
})
export class HomePage {
  @ViewChild("contentRef") contentHandle: Content;


userData: any = null;
APP_ID: number = 1458461600876986;

oauthBaseUrl = '';

constructor(public navCtrl: NavController, private facebook:Facebook, public nativeStorage: NativeStorage, private http:Http, private facebookService:FacebookLoginService){  
  this.facebook.browserInit(this.APP_ID);
}

facebookLogin(){
   this.facebookService.facebookLogin();
}
  

 }