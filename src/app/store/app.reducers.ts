import { ActionReducerMap } from '@ngrx/store';

import * as ShoppingListReducer from '../shopping-list/store/shopping-list.reducer';
import * as AuthReducer from '../auth/store/auth.reducer';
import * as RecipesReducer from "../recipes/store/recipe.reducer";

export interface AppState{
    shoppingList: ShoppingListReducer.State,
    auth: AuthReducer.State,
    recipes: RecipesReducer.State
}; 

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: ShoppingListReducer.ShoppingListReducer,
    auth: AuthReducer.AuthReducer,
    recipes: RecipesReducer.RecipeReducer
}