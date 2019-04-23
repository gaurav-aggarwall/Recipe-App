import { EventEmitter } from '@angular/core';

import  { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
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

    recipeSelected = new EventEmitter<Recipe>();  

    getRecipes(){
        return this.recipes.slice();
    }    
}
