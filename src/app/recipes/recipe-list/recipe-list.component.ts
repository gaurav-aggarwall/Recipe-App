import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import * as app from "../../store/app.reducers";
import * as recipesReducer from "../store/recipe.reducer";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeState: Observable<recipesReducer.State>;
  
  constructor(private router: Router, 
              private route: ActivatedRoute,
              private store: Store<app.AppState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

  // Clicking New Recipe Button
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
