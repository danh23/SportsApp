import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SportsDataService } from "../../services/sportsDataService";
import { ProfilePage } from "../profile/profile";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-listSports',
  templateUrl: 'listSports.html'
})
export class ListSportsPage {
  selectedItem: any;
  icons: string[];
  sports: Array<{name: string, icon: string, id:any}> = new Array<{name:string, icon: string, id:any}>();
  editProfileForm: FormGroup = new FormGroup ({
    sportName: new FormControl(),
    sportId: new FormControl()
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private sportsData: SportsDataService,
              public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
  //  this.selectedItem = navParams.get('item');


    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.doRefresh(0);
 
}
       
backButton(){
  this.navCtrl.setRoot(ProfilePage);
}

presentLoading() {
  let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 1000
  });
  loader.present();
}

deleteSportFromUser(sportId){
  //console.log(sportId);
      this.sportsData.deleteUserSport(60, sportId).subscribe(res => {
        //console.log(res);
      });

      
      this.doRefresh(1);
      this.presentLoading();
}

doRefresh(refresher){
this.sports = [];
  
  this.sportsData.getSportsByUserId(60)
  .subscribe(res => { 
    for (let i =0; i< res.length; ++i){
    this.sports.push({
      name: res[i].name,
      id: res[i].id,
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
    if (refresher != 0)
        refresher.complete();
  }
  });
}

addSportToUser(){

}

}