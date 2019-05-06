import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Burger Bun', 2),
        new Ingredient('Pasta', 1)
    ];

    ingChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    ingredientsChanged(){
        this.ingChanged.next(this.ingredients.slice());
    }

    getIng(){
        return this.ingredients.slice();
    }

    getIngridient(i: number){
        return this.ingredients[i];
    }

    addIng(ing: Ingredient){
        this.ingredients.push(ing);
        this.ingredientsChanged();
    }

    addIngs(ings: Ingredient[]){
        this.ingredients.push(...ings);
        this.ingredientsChanged();
    }

    updateIng(i: number, newIngredient: Ingredient){
        this.ingredients[i] = newIngredient;
        this.ingredientsChanged();
    }

    deleteIng(i: number){
        this.ingredients.splice(i, 1);
        this.ingredientsChanged();
    }
}