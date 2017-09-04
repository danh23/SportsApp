import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { NativeStorage } from "@ionic-native/native-storage";
import { Http,RequestOptions } from "@angular/http";
import { ServerDataService } from "../../services/serverDataService";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})


export class SignupPage {
  
signupForm: FormGroup = new FormGroup ({
  username: new FormControl(),
  password: new FormControl(),
  firstName: new FormControl(),
  lastName: new FormControl(),
  confirmPassword: new FormControl(),
  email: new FormControl()
});

constructor(public navCtrl: NavController,
  public nativeStorage: NativeStorage,
  private http:Http, 
  private serviceData: ServerDataService){  
}
  doSignup() {
  // console.log(this.signupForm.controls.username.value);
  // console.log(this.signupForm.controls.email.value);
 //  console.log(this.signupForm.controls.firstName.value);
 //  console.log(this.signupForm.controls.lastName.value);
       this.serviceData.setUser(null,
                                this.signupForm.controls.email.value, 
                                null,
                                this.signupForm.controls.firstName.value, 
                                this.signupForm.controls.lastName.value, 
                                null).subscribe(res => {
  });

  this.navCtrl.push(ProfilePage, {
    email : this.signupForm.controls.email.value
  });

  }
}
