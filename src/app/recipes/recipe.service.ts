import  { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'A test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcYEKGIgkO7wnX_k1tbsAaYEiA6BvcD3zPAoBo8csaW8EAopR'),
        new Recipe('Test Recipe', 'A test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcYEKGIgkO7wnX_k1tbsAaYEiA6BvcD3zPAoBo8csaW8EAopR')
        ];

    getRecipes(){
        return this.recipes.slice();
    }    
}
