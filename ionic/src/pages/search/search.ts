import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  /**
   * Perform a service for the proper items.
   */
 
}
