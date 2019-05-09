import { Injectable } from '@angular/core';

import  { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) { }

    private recipes: Recipe[] = [
        new Recipe(
            'Burger', 
            'Umm, What else do you you need?', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH1vGJdLWpZIfsM_oxIm9zMZajfgVN2Ov8lAOXswpOVM92OBV',
            [
                new Ingredient('Patty', 1),
                new Ingredient('Burger Buns', 2),
                new Ingredient('Ketchup', 1)
            ]
        ),
        new Recipe(
            'Pasta', 
            'Delicious, creamiest Pasta ever', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bb8ezVNzzLPo5ozj5-5-MiQfL91aAhMVUYC5W3qyenfV3bYL',
            [
                new Ingredient('Pasta', 1),
                new Ingredient('Pasta Sauce', 1),
                new Ingredient('Vegies', 1)
            ]

        )
    ];

    recipesChanged = new Subject<Recipe[]>();

    // Recipe Changes
    returnRecipeChanged(){
        this.recipesChanged.next(this.recipes.slice());
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
