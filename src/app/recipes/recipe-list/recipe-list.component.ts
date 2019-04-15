import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcYEKGIgkO7wnX_k1tbsAaYEiA6BvcD3zPAoBo8csaW8EAopR'),
    new Recipe('Test Recipe', 'A test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcYEKGIgkO7wnX_k1tbsAaYEiA6BvcD3zPAoBo8csaW8EAopR')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){ 
    this.selectedRecipe.emit(recipe);
  }

}
