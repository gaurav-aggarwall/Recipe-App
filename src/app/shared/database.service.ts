import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DatabaseService {
    constructor(private http: Http, private recipeService: RecipeService){};
    private URL: string = 'https://recipe-61c1c.firebaseio.com/';

    save(){
        return this.http.put(`${this.URL}/recipes.json`, this.recipeService.getRecipes());
    }

    fetch(){
        this.http.get(`${this.URL}/recipes.json`).pipe(map( (response: Response) => {
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