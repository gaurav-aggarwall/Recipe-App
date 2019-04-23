import { Ingridient } from '../shared/ingridient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingridients: Ingridient[] = [
        new Ingridient('A', 10),
        new Ingridient('B', 3)
    ];

    ingChanged = new EventEmitter<Ingridient[]>();

    getIng(){
        return this.ingridients.slice();
    }

    addIng(ing: Ingridient){
        this.ingridients.push(ing);
        this.ingChanged.emit(this.ingridients.slice());
    }
}