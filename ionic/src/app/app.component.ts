import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListSportsPage } from '../pages/listSports/listSports';
import { ScrollPage } from '../pages/scroll/scroll';
import { MapGooglePage } from '../pages/mapGoogle/mapGoogle';
import { EventsPage } from '../pages/events/events';
import { ContentPage } from '../pages/content/content';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from "../pages/profile/profile";
import { FacebookStorageService } from "../services/facebookStorageService";
import { FacebookLoginService } from "../services/facebookLoginService";
import { NativeStorage } from "@ionic-native/native-storage";


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProfilePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar,
     public splashScreen: SplashScreen,
     private facebookStorage: FacebookStorageService,
     private facebookService:FacebookLoginService,
    public storage: NativeStorage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sporturile mele', component: ListSportsPage },
      { title: 'Cauta prieteni noi', component: ScrollPage },
       {title: 'Profil', component: ProfilePage},
       {title: 'Login', component: LoginPage}
    ];

    
     
  }

ngOnInit(){

 // console.log("aici");
      this.storage.getItem('email').then(data => {
    
         /// console.log(data);
          if (data != null){
            this.rootPage = ProfilePage;
          }
          
        },
      err => {
        console.log(err);
      });
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
