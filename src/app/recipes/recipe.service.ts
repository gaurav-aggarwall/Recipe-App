import { Injectable } from '@angular/core';

import  { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) { }

    private recipes: Recipe[] = [];

    recipesChanged = new Subject<Recipe[]>();

    // Recipe Changes
    returnRecipeChanged(){
        this.recipesChanged.next(this.recipes.slice());
    }

    // Setting Recipes
    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.returnRecipeChanged();
    }

    // Returns All the Recipes
    getRecipes(){
        return this.recipes.slice();
    } 
    

    // Return a  particular Recipe
    getRecipe(index: number){
        return this.recipes[index];
    }


    // Add Ingredients
    addIngToCart(ingredients: Ingredient[]){
        this.shoppingListService.addIngs(ingredients);
    }


    // Add a recipe
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.returnRecipeChanged();
    }


    // Updates a particular Recipe
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.returnRecipeChanged();
    }


    // Delete a particular recipe
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.returnRecipeChanged();
    }
}
