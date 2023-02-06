import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SMTPClient } from 'emailjs';
// import { Firestore, collectionData, collection  } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';

// let client = new SMTPClient({
//   user: 'user',
//   password: 'password',
//   host: 'smtp.your-email.com',
//   ssl: true,
// });

// client.send(
//   {
//       text: 'i hope this works',
//       from: 'you <username@your-email.com>',
//       to: 'someone <someone@your-email.com>, another <another@your-email.com>',
//       cc: 'else <else@your-email.com>',
//       subject: 'testing emailjs',
//   },
//   (err, message) => {
//       console.log(err || message);
//   }
// );


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // myImage:string = "src/assets/img/pic2-1.png"
  registerForm !: FormGroup;
  submitted = true;
  submitMessage = '';

  private myForm!: AngularFirestoreCollection<any>;
  constructor(private fb:FormBuilder,private fs: AngularFirestore) { 

  }



  ngOnInit(): void {

    this.myForm = this.fs.collection('enquiry');


    this.registerForm=this.fb.group({
      firstName:[null,Validators.required],
      lastName:[null,Validators.required],
      email:[null,[Validators.compose([Validators.required, Validators.email])]],
      phone:[null,Validators.required],
      country:[null,Validators.required],
      state:[null,Validators.required],
      zipCode:[null,Validators.required],
    })
  }




  submit(value:any){
    console.log('val',value);
    this.myForm.add(value)
    .then(res=> {
      console.log('res',res);
      this.submitMessage= 'Success'
    })
    .catch(err=>{
      console.log(err);
      
    })
    
    this.submitted=true;
    setTimeout(() => {
      this.submitted=false;
    }, 1000);
  }

}


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