

import { Injectable } from "@angular/core";
import { Http, RequestOptions, RequestOptionsArgs, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ServerDataService{

    
  url: string = 'http://89.38.251.45:8080';
  setForUser: string = '/user/setUser';
  getForAllUsers: string = '/user/getAllUsers';
  getUserEmail: string = '/user/getUserByEmail';
  getAllSports: string = '/user/getAllSports'
  public items = [];

    constructor(private http:Http){
        
    }
   // let headers = new Headers({'Content-Type' 'application/json'});
    //options = new RequestOptions(this.headers)

    //getUser(){
    //    return this.http.get(this.url, this.options).map(res => res.json()); 
    //}

    setUser(username, email, facebookId, first_name, last_name, city){
      

     // console.log("a intrat");
     let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');

      let options = new RequestOptions({ headers: headers });

//console.log(first_name, last_name);

      let body = {
        "firstName": first_name, 
        "email": email,
        "facebookId": facebookId,
        "lastName": last_name,
        "city": city,
        "username": username,
        "country": "Romania"
      }

     console.log(body);
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
 

    getUserByEmail(email){
      
     let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');

      let options = new RequestOptions({ headers: headers });

      
      return this.http.post(this.url + this.getUserEmail,email,options).map(
        data => data.json());
    
    }

    
}