import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDxiHdgSBwLl9ZZOMK_ThnbOlZ2iA4qCoQ",
    authDomain: "projet-book-openclass.firebaseapp.com",
    databaseURL: "https://projet-book-openclass.firebaseio.com",
    projectId: "projet-book-openclass",
    storageBucket: "projet-book-openclass.appspot.com",
    messagingSenderId: "30128538343"
  };
  firebase.initializeApp(config);
  }
}
