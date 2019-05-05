import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Burger Bun', 2),
        new Ingredient('Pasta', 1)
    ];

    ingChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    getIng(){
        return this.ingredients.slice();
    }

    getIngridient(i: number){
        return this.ingredients[i];
    }

    addIng(ing: Ingredient){
        this.ingredients.push(ing);
        this.ingChanged.next(this.ingredients.slice());
    }

    addIngs(ings: Ingredient[]){
        this.ingredients.push(...ings);
        this.ingChanged.next(this.ingredients.slice());
    }
}