import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as app from "../store/app.reducers";
import * as actions from "./store/auth.actions";

@Injectable()
export class AuthService {
    constructor(private router: Router, private store: Store<app.AppState>){}

    // Sign Up
    SignUp(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( user => {
                this.store.dispatch(new actions.SignUp());
                firebase.auth().currentUser.getIdToken(true)
                    .then( (token: string) => {
                        this.store.dispatch(new actions.SetToken(token));
                    });
            }).catch(err => console.log(err));
    }


    // Signing In 
    SignIn(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.store.dispatch(new actions.SignUp())
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken(true)
                    .then( (token: string) => {
                        this.store.dispatch(new actions.SetToken(token));
                    });
            })
            .catch(error => console.log(error)); 
    }


    // Log Out 
    LogOut(){
        firebase.auth().signOut();
        this.store.dispatch(new actions.LogOut());
    }
}