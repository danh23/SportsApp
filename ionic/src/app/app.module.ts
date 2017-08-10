import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScrollPage } from '../pages/scroll/scroll';
import { ListFriendsPage } from '../pages/listFriends/listFriends';
import { MapGooglePage } from '../pages/mapGoogle/mapGoogle';
import { EventsPage } from '../pages/events/events';
import { User } from '../providers/user';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from "@angular/http";
import { Facebook } from "@ionic-native/facebook";
import { NativeStorage } from '@ionic-native/native-storage';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FacebookStorageService } from "../services/facebookStorageService";
import { FacebookLoginService } from "../services/facebookLoginService";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListFriendsPage,
    ScrollPage,
    MapGooglePage,
    EventsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListFriendsPage,
    ScrollPage,
    MapGooglePage,
    EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Camera,
    User,
    FacebookStorageService,
    FacebookLoginService,
    Geolocation,
    Facebook,
    NativeStorage,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
