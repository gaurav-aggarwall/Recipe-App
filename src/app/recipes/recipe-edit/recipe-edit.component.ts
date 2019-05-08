import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditing: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.isEditing = params['id'] != null;
      this.initForm(); 
    })
  }

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

      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'image': new FormControl(recipeURL, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeIng
      });
    }
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  
  onSubmit(){
    console.log(this.recipeForm);
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null,   Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('[1-9]+[0-9]*')])
    }));
  }

}
