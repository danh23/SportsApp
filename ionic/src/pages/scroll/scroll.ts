import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';
//import { ServerData } from "../../services/serverDataService";

@Component({
  selector: 'page-scroll',
  templateUrl: 'scroll.html'
})
export class ScrollPage {
  @ViewChild("contentRef") contentHandle: Content;
 
  public items = [];
  private tabBarHeight;
  private topOrBottom:string;
  private contentBox;
 
  constructor(public navCtrl: NavController//, private serverData:ServerData
  ) {
    for (let i = 1; i <= 20; i++) {
      this.items.push({ "number": i });
    }

    //serverData.getUser().subscribe(res =>{
      //console.log(res);
    //});
  }
 
  ionViewDidEnter() {
    this.topOrBottom=this.contentHandle._tabsPlacement;
    this.contentBox=document.querySelector(".scroll-content")['style'];
  
    if (this.topOrBottom == "top") {
      this.tabBarHeight = this.contentBox.marginTop;
    } else if (this.topOrBottom == "bottom") {
      this.tabBarHeight = this.contentBox.marginBottom;
    }
  }
 
  scrollingFun(e) {
    if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight) {
      document.querySelector(".tabbar")['style'].display = 'none';
      if (this.topOrBottom == "top") {
        this.contentBox.marginTop = 0;
      } else if (this.topOrBottom == "bottom") {
        this.contentBox.marginBottom = 0;
      }
 
    } else {
      document.querySelector(".tabbar")['style'].display = 'flex';
      if (this.topOrBottom == "top") {
        this.contentBox.marginTop = this.tabBarHeight;
      } else if (this.topOrBottom == "bottom") {
        this.contentBox.marginBottom = this.tabBarHeight;
      }
 
    }//if else
  }//scrollingFun
}
