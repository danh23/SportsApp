

import { Injectable } from "@angular/core";
import { Http,RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { NativeStorage } from "@ionic-native/native-storage";


@Injectable()
export class FacebookLoginService{

    
  url: string = 'https://graph.facebook.com/oauth/access_token?client_id=1458461600876986&client_secret=7b5d127b2fe1c6acb12980455c1353c1&grant_type=client_credentials';
    constructor(private http:Http, private iab: InAppBrowser, private storage: NativeStorage){
        
    }
   
facebookLogin() {
        
        //this.storage.set('token', 'EAAUudo2jiboBAJOSVpEMerbSDzgVXyodnyrKJCoiWrTZCNfQhJCXfOkp4DTr8XfvBH58YZBZBeDk21JJ4guX4olbcEXEXmpyuG8Dok5NHUtA3BQyzO6CRq1VbM8I48y7Lt5DE0L3bmNwmTESU9sdqVKopJXtMrECTFvjn0wZAAZDZD');

        var oauthLoginUrl = 'https://www.facebook.com/dialog/oauth?app_id=1458461600876986&redirect_uri=http://localhost/callback/'
         
        let loginWindow: InAppBrowserObject = this.iab.create(oauthLoginUrl, '_blank', 'location=no,toolbar=no');
        
        console.log(this.storage.getItem('token'));

        if (this.storage.getItem('token') == null){

                //console.log("Login 3");
                loginWindow.on('loadstop').subscribe((event) => {
                
                    console.log(event.url);
                        let url = event.url;
                        var codeIndex = url.indexOf("code=");
                        var code = url.substring(codeIndex + 5, url.length);
                        console.log(code);
                        //
                        this.getAccessToken(code, loginWindow);
                });
        }
    }
   

    loggedIn(){
//console.log("a intrat");
//console.log(this.storage.getItem('token'));
var token = this.storage.getItem('token');

         if (token == null)
            return false;
         return true;
    }
  


    getAccessToken(authorizationCode, loginWindow: InAppBrowserObject) {
    
        var oauthTokenUrl = 'https://graph.facebook.com/oauth/access_token?redirect_uri=http://localhost/callback/&client_id=1458461600876986&client_secret=7b5d127b2fe1c6acb12980455c1353c1&code='+ authorizationCode + '&grant_type=authorization_code';
        
        loginWindow.close();

      //  console.log("intrat");
        
        this.http.get(oauthTokenUrl).map((response => response.json())).subscribe((res) => {   
        this.storage.setItem('token', JSON.stringify(res.access_token));   
        });
        
    }
}