import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedOption = 'recipes';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAi5EBUe0LQvkWk4ESm81KHJjyTyRG4TyA",
      authDomain: "recipe-app-cart.firebaseapp.com"
    });
  }

  onNavigate(option: string ){
    this.loadedOption = option;
  }
}
