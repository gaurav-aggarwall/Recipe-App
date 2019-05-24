import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipes/recipe.model';

import * as app from "../store/app.reducers";
import * as actions from "../recipes/store/recipe.actions";

@Injectable()
export class DatabaseService {
    constructor(private http: Http,
                private store: Store<app.AppState>){
    };

    private URL: string = 'https://recipe-app-cart.firebaseio.com';


    // Save Recipes Data
    save(){
        console.log('saving');
        this.store.select('auth').subscribe(data => {
            return this.http.put(`${this.URL}/recipes.json?auth=${data.token}`, this.store.dispatch(new actions.FetchRecipes()));
        });
    }


    // Fetch Recipes Data
    fetch(){
        this.store.select('auth').subscribe(data => {
            this.http.get(`${this.URL}/recipes.json?auth=${data.token}`).pipe(map( (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes){
                    if(!recipe.ingredients){
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            })).subscribe( (recipes: Recipe[]) => {
                this.store.dispatch(new actions.SetRecipes(recipes));   
            });
        });
    }

}