import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredient.model';

import * as Actions from "../store/shopping-list.actions";
import * as shoppingList from "../store/shopping-list.reducer";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm; 

  subscription: Subscription;
  editMode: boolean = false;
  editItem: Ingredient;

  constructor( private store: Store<shoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(data => {
      if(data.editedIngredientIndex > -1){
        this.editItem = data.editedIngredient;
        this.form.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
        });
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new Actions.StopEdit());
    this.subscription.unsubscribe();
  }

  onSubmitForm(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);

    if(this.editMode) {
      this.store.dispatch(new Actions.UpdateIngredient({ ingredient: newIng}));
    } else {
      this.store.dispatch(new Actions.AddIngredient(newIng)) 
    }
    this.editMode = false;
    form.reset();
  }

  onDelete(){
    this.store.dispatch(new Actions.DeleteIngredient());
    this.onClearForm();
  }

  onClearForm(){
    this.form.reset();
    this.editMode = false;
  }

}
