

import { Injectable } from "@angular/core";
import { Http,RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { NativeStorage } from "@ionic-native/native-storage";



@Injectable()
export class FacebookStorageService{

    public accesToken: any;

    constructor(private http: Http, private storage: NativeStorage){
        
    }

    
      
    getUserProfile(){
       //let token = 'EAAUudo2jiboBAJOSVpEMerbSDzgVXyodnyrKJCoiWrTZCNfQhJCXfOkp4DTr8XfvBH58YZBZBeDk21JJ4guX4olbcEXEXmpyuG8Dok5NHUtA3BQyzO6CRq1VbM8I48y7Lt5DE0L3bmNwmTESU9sdqVKopJXtMrECTFvjn0wZAAZDZD';//this.storage.getItem('token');
     // var tokenValue;
    this.storage.getItem('token').then((data) => {
        
        this.accesToken =data;
        console.log(this.accesToken);
        console.log(data);
   }); 
        
      console.log(this.accesToken);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authentication', 'Bearer '+ this.accesToken);
        let options = new RequestOptions({ headers: headers });

        return this.http.get("https://graph.facebook.com/v2.10/me?fields=picture,email,first_name,last_name,hometown&access_token=" + this.accesToken, options)
            .map((response1 => response1.json()));
    }
    
}