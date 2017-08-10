

import { Injectable } from "@angular/core";
import { Http,RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ServerData{

    
  url: string = 'https://example.com/api/v1';
    constructor(private http:Http){
        
    }
   // let headers = new Headers({'Content-Type' 'application/json'});
    //options = new RequestOptions(this.headers)

    //getUser(){
    //    return this.http.get(this.url, this.options).map(res => res.json()); 
   // }
}