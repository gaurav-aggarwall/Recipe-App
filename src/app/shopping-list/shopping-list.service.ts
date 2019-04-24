import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Burger Bun', 2),
        new Ingredient('Pasta', 1)
    ];

    ingChanged = new EventEmitter<Ingredient[]>();

    getIng(){
        return this.ingredients.slice();
    }

    addIng(ing: Ingredient){
        this.ingredients.push(ing);
        this.ingChanged.emit(this.ingredients.slice());
    }

    addIngs(ings: Ingredient[]){
        this.ingredients.push(...ings);
        this.ingChanged.emit(this.ingredients.slice());
    }
}