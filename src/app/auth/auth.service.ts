import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router){}

    // Sign Up
    SignUp(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => console.log(err));
    }


    // Signing In 
    SignIn(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken(true)
                    .then( (token: string) => this.token = token)
            })
            .catch(error => console.log(error)); 
    }


    // Log Out 
    LogOut(){
        firebase.auth().signOut();
        this.token = null;
    }


    // Token Retrieval
    getToken(){
        firebase.auth().currentUser.getIdToken(true)
            .then( (token: string) => this.token = token)
            .catch(error => console.log(error)); 
        
        return this.token;    
    }


    // Authentication Check
    isAuthenticated(){
        return this.token != null;
    }
}