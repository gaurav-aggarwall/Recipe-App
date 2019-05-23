import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

import * as Actions from './recipe.actions';

export interface State{
    recipes: Recipe[]
};

const initalState: State = {
    recipes: [
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
    ]
}; 

export function RecipeReducer(state = initalState, action: Actions.RecipeActions){
    switch(action.type){
        
        case Actions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            };

        case Actions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };

        case Actions.UPDATE_RECIPE:
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
 
            return {
                ...state,
                recipes: recipes
            };

        case Actions.DELETE_RECIPE:
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1);
            
            return {
                ...state,
                recipes: oldRecipes
            };

        default: 
            return state;    
    }
}