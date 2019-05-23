import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

import * as app from "../store/app.reducers";
import * as auth from "./store/auth.reducer";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<app.AppState>){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.store.select('auth').pipe(take(1), map( (authState: auth.State) => {
            return authState.authenticated;
        }));
    }
}