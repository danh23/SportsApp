import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-mapGoogle',
  templateUrl: 'mapGoogle.html'
})
export class MapGooglePage {
 @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(private googleMaps: GoogleMaps, 
    public navCtrl: NavController, 
    public platform: Platform, 
    public geolocation: Geolocation) {
      this.ionViewDidLoad();
     }

ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
let options = { timeout: 10000, enableHighAccurracy: true};
this.geolocation.getCurrentPosition(options).then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(document.getElementById("map"),mapOptions);
 
    }, (err) => {
      console.log(err);
    });

  }

addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "<h4>Information!</h4>";          
 
  this.addInfoWindow(marker, content);
 
}

addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}

}

