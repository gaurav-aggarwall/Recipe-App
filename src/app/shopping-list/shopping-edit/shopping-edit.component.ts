import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm; 

  subscription: Subscription;
  editMode: boolean = false;
  editIemIndex: number;
  editItem: Ingredient;

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopingListService.startedEditing.subscribe( i => {
      this.editMode = true;
      this.editIemIndex = i;
      this.editItem = this.shopingListService.getIngridient(i);
      this.form.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
  }

  onSubmitForm(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);

    if(this.editMode) {
      this.shopingListService.updateIng(this.editIemIndex, newIng);
    } else {
      this.shopingListService.addIng(newIng);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete(){
    this.shopingListService.deleteIng(this.editIemIndex);
    this.onClearForm();
  }

  onClearForm(){
    this.form.reset();
    this.editMode = false;
  }

}
