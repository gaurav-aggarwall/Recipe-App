import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditing: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

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
      const recipe = this.recipeService.getRecipe(this.id);
      
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
    }  
      
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'image': new FormControl(recipeURL, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIng
    });

    console.log(this.recipeForm);
  }


  // Add New Ingredient Input in the form
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  


  // Form Submit
  onSubmit(){
    const newName =this.recipeForm.value.name;
    const newDescription =  this.recipeForm.value.description;
    const newImagePath = this.recipeForm.value.image;
    const newIngredients = this.recipeForm.value.ingredients;

    const newRecipe = new Recipe(newName, newDescription, newImagePath, newIngredients);

    console.log(newRecipe);

    if(this.isEditing){
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
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

}
