import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DatabaseService {
    constructor(private http: Http, 
                private recipeService: RecipeService, 
                private auth: AuthService){
    };

    private URL: string = 'https://recipe-app-cart.firebaseio.com';


    // Save Recipes Data
    save(){
        const token = this.auth.getToken();
        return this.http.put(`${this.URL}/recipes.json?auth=${token}`, this.recipeService.getRecipes());
    }


    // Fetch Recipes Data
    fetch(){
        const token = this.auth.getToken();
        this.http.get(`${this.URL}/recipes.json?auth=${token}`).pipe(map( (response: Response) => {
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
    }

}