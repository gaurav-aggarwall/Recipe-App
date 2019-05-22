import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DatabaseService } from '../shared/database.service';
import { AuthService } from '../auth/auth.service';

import * as app from "../store/app.reducers";
import * as auth from "../auth/store/auth.reducer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<auth.State>;

  constructor(private database: DatabaseService, private auth: AuthService, private store: Store<app.AppState>) { }

  ngOnInit(){
    this.authState = this.store.select('auth');
  }

  onSaveData(){
    // this.database.save().subscribe( (response: Response) => {
    //   console.log(response);
    // });
  }
  
  onFetchData(){
    this.database.fetch();
  }

  onLogOut(){
    this.auth.LogOut();
  }

}
