import * as Actions from './shopping-list.actions';

import { Ingredient } from 'src/app/shared/ingredient.model';

export interface State{
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
};

const initalState: State = {
    ingredients: [
        new Ingredient('Burger Bun', 2),
        new Ingredient('Pasta', 1)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function ShoppingListReducer (state = initalState, action: Actions.ShoppingListActions){
    switch(action.type){
        
        case Actions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]  
            };

        case Actions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]  
            };
            
        case Actions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: ingredients  ,
                editedIngredient: null,
                editedIngredientIndex: -1
            };    
        
        case Actions.DELETE_INGREDIENT:
            const newIngredients = [...state.ingredients];
            newIngredients.splice(state.editedIngredientIndex,1);

            return {
                ...state,
                ingredients: newIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1 
            };    
            
        case Actions.START_EDIT:
            const ing = {...state.ingredients[action.payload]};
            
            return {
                ...state,
                editedIngredient: ing,
                editedIngredientIndex: action.payload
            }
            
        case Actions.STOP_EDIT:
            return{
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1 
            }    

        default: 
            return state;    
    }
}