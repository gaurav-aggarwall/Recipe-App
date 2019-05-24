import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as app from "../../store/app.reducers";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions";
import * as recipesReducer from "../store/recipe.reducer";
import * as actions from "../store/recipe.actions";
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<recipesReducer.State>;
  id: number;

  constructor( private route: ActivatedRoute, 
              private router: Router,
              private store: Store<app.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.recipeState = this.store.select('recipes');
    });
  }

  addToCart() {
    this.store.select('recipes').pipe(take(1)).subscribe((recipeState: recipesReducer.State) => {
      this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new actions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
