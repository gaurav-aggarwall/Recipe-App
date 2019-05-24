import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as app from "../../store/app.reducers";
import * as recipesReducer from "../store/recipe.reducer";
import * as actions from "../store/recipe.actions";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditing: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<app.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.isEditing = params['id'] != null;
      this.initForm(); 
    });
  }


  // Form Initalization
  private initForm(){
    let recipeName = '';
    let recipeURL = '';
    let recipeDescription = '';
    let recipeIng = new FormArray([]);
    
    if(this.isEditing){
      this.store.select('recipes').pipe(take(1)).subscribe((recipeState: recipesReducer.State) => {
        var recipe = recipeState.recipes[this.id]; 
        recipeName = recipe.name;
        recipeURL = recipe.imagePath;
        recipeDescription = recipe.description;
        
        if(recipe.ingredients){
          for(let ing of recipe.ingredients)
          recipeIng.push(new FormGroup({
            'name': new FormControl(ing.name, Validators.required),
            'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern('[1-9]+[0-9]*')])
          }));
        }
      });
    }  
      
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'image': new FormControl(recipeURL, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIng
    });
  }


  // Add New Ingredient Input in the form
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  

  // Form Submit
  onSubmit(){
    if(this.isEditing){
      this.store.dispatch(new actions.UpdateRecipe({index: this.id, updatedRecipe: this.recipeForm.value}));
    } else {
      this.store.dispatch(new actions.AddRecipe(this.recipeForm.value));
    }

    this.onNavigatefromForm();
  }


  // Form Cancel
   onFormCancel(){
    this.onNavigatefromForm();
  }


  // navigate from Form
  onNavigatefromForm(){
    this.router.navigate( ['../'], {relativeTo: this.route});
  }


  // Addinng New Ingredients
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null,   Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('[1-9]+[0-9]*')])
    }));
  }


  // Deleting Ingredients
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
