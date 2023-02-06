import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AngularFireModule } from "@angular/fire/compat";
import { getFirestore } from "@angular/fire/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACX0KPrLIuPnzseK2nnZX1Q9KcwM4eHjk",
  authDomain: "lakshmicocopith-14e47.firebaseapp.com",
  projectId: "lakshmicocopith-14e47",
  storageBucket: "lakshmicocopith-14e47.appspot.com",
  messagingSenderId: "336325778717",
  appId: "1:336325778717:web:72f0825cd0a98c4d2c55f4",
  measurementId: "G-941KGMDCMR"
};

let app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyACX0KPrLIuPnzseK2nnZX1Q9KcwM4eHjk",
//   authDomain: "lakshmicocopith-14e47.firebaseapp.com",
//   projectId: "lakshmicocopith-14e47",
//   storageBucket: "lakshmicocopith-14e47.appspot.com",
//   messagingSenderId: "336325778717",
//   appId: "1:336325778717:web:72f0825cd0a98c4d2c55f4",
//   measurementId: "G-941KGMDCMR"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);