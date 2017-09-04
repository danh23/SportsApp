

import { Injectable } from "@angular/core";
import { Http, RequestOptions, RequestOptionsArgs, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SportsDataService{

    
  url: string = 'http://89.38.251.45:8080';
  getAllSports: string = '/user/getUserSportsById';
  deleteSport: string = '/user/deleteUserSportById';
  
  constructor(private http:Http){
        
        }

    getSportsByUserId(userId){
      
     let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');

      let options = new RequestOptions({ headers: headers });

     
      //console.log("a intrat aici");
      return this.http.post(this.url + this.getAllSports,userId,options)
      .map(data => data.json());
    
    }

    deleteUserSport(userId, sportId){
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');
  
        let options = new RequestOptions({ headers: headers });
  
        let body = {
            "userId": userId,
            "sportId": sportId
        }
       
        //console.log("a intrat aici");
        return this.http.post(this.url + this.deleteSport,JSON.stringify(body),options)
        .map(data => data.json());

    }

    
}