import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import * as app from "../store/app.reducers";

@Injectable()
export class DatabaseService {
    constructor(private http: Http, 
                private recipeService: RecipeService, 
                private store: Store<app.AppState>){
    };

    private URL: string = 'https://recipe-app-cart.firebaseio.com';


    // Save Recipes Data
    save(){
        this.store.select('auth').subscribe(data => {
            return this.http.put(`${this.URL}/recipes.json?auth=${data.token}`, this.recipeService.getRecipes());
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
                this.recipeService.setRecipes(recipes);   
            });
        });
    }

}