import { Component, OnInit } from '@angular/core';
import {GoogleAuthProvider} from "firebase/auth";
import { firstValueFrom } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  auth_token: string = '';
  user: any;
  // firebasePayload!: FirebasePayload;
  constructor(private fireAuth: AngularFireAuth) {}

 ngOnInit(): void {
   
 }

  onSignInClick() {
    this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then(res => {
      console.log("Signed in successfully");
      // console.log(this.firebasePayload);
    }).catch((err) => {
      console.log(err);
    })

  }

  // createUser() {
  //   try {
  //     firstValueFrom(this.service.createUser(this.firebasePayload)).then(
  //       (x) => {
  //         console.log(x.authToken);
  //         this.service.setToken(x.authToken);
  //         if(x.userRole === "DEFAULT")
  //           this._dataService.isUserDeafult = true

  //         if(this._dataService.isUserDeafult) {
  //           this.router.navigate(["/defaultPage"])
  //         }
  //           else {
  //           this.router.navigate(["/referral"]);
  //         }
  //       }
  //     )
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }
}
