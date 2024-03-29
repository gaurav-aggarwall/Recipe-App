import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutesModule } from './app-routes.module';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthGuard } from './auth/auth-guard.service';
import { DatabaseService } from './shared/database.service';
import { AuthService } from './auth/auth.service';

import { reducers } from './store/app.reducers';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule,
    SharedModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    StoreModule.forRoot(reducers)
    
  ],
  providers: [DatabaseService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
