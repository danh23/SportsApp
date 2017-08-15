

import { Injectable } from "@angular/core";
import { Http, RequestOptions, RequestOptionsArgs, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ServerDataService{

    
  url: string = 'http://89.38.251.45:8080';
  setForUser: string = '/user/setUser';
  getForAllUsers: string = '/user/getAllUsers';
  public items = [];

    constructor(private http:Http){
        
    }
   // let headers = new Headers({'Content-Type' 'application/json'});
    //options = new RequestOptions(this.headers)

    //getUser(){
    //    return this.http.get(this.url, this.options).map(res => res.json()); 
    //}

    setUser(username, email, facebookId){
      
     let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');

      let options = new RequestOptions({ headers: headers });

      let body = {
        "username": username, 
        "email": email,
        "facebookId": facebookId
      }
      return this.http.post(this.url + this.setForUser, JSON.stringify(body),options).map(
        data => data.json());
    
    }

     getAllUsers(){
      
     let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');

      let options = new RequestOptions({ headers: headers });

      return this.http.get(this.url + this.getForAllUsers,options).map(
        data => data.json());
    

        //return this.items;
    }
 

    
}