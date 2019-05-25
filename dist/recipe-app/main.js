(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-routes.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");






var appRoutes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingListComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyAi5EBUe0LQvkWk4ESm81KHJjyTyRG4TyA",
            authDomain: "recipe-app-cart.firebaseapp.com"
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_routes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routes.module */ "./src/app/app-routes.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipes.module */ "./src/app/recipes/recipes.module.ts");
/* harmony import */ var _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-list/shopping-list.module */ "./src/app/shopping-list/shopping-list.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _shared_database_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/database.service */ "./src/app/shared/database.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/app.reducers */ "./src/app/store/app.reducers.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutesModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_7__["RecipesModule"],
                _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_8__["ShoppingListModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_15__["reducers"])
            ],
            providers: [_shared_database_service__WEBPACK_IMPORTED_MODULE_13__["DatabaseService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) {
            return authState.authenticated;
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routes.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-routes.module.ts ***!
  \********************************************/
/*! exports provided: AuthRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutesModule", function() { return AuthRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");





var authRoutes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] }
];
var AuthRoutesModule = /** @class */ (function () {
    function AuthRoutesModule() {
    }
    AuthRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutesModule);
    return AuthRoutesModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routes.module */ "./src/app/auth/auth-routes.module.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _auth_routes_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutesModule"]
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/auth.actions */ "./src/app/auth/store/auth.actions.ts");






var AuthService = /** @class */ (function () {
    function AuthService(router, store) {
        this.router = router;
        this.store = store;
    }
    // Sign Up
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_5__["SignUp"]());
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken(true)
                .then(function (token) {
                _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_5__["SetToken"](token));
            });
        }).catch(function (err) { return console.log(err); });
    };
    // Signing In 
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_5__["SignUp"]());
            _this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken(true)
                .then(function (token) {
                _this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_5__["SetToken"](token));
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    // Log Out 
    AuthService.prototype.LogOut = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LogOut"]());
        this.router.navigate(['/recipes']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-form {\n    margin-top: 50px;\n}\n\n.signin-form form {\n    border: 1px solid #ccc;\n    padding: 40px 80px 60px 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmluLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zaWduaW4tZm9ybSBmb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDQwcHggODBweCA2MHB4IDgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin-form row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignIn(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\" ngModel>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" ngModel>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignIn = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.SignIn(email, password);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-form {\n    margin-top: 50px;\n}\n\n.signup-form form {\n    border: 1px solid #ccc;\n    padding: 40px 80px 60px 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zaWdudXAtZm9ybSBmb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDQwcHggODBweCA2MHB4IDgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-form row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignUp(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\" ngModel>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" ngModel>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.SignUp(email, password);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: SIGNUP, SIGNIN, LOGOUT, SET_TOKEN, SignUp, SignIn, LogOut, SetToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return LogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToken", function() { return SetToken; });
// Action Types 
var SIGNUP = 'SIGNUP';
var SIGNIN = 'SIGNIN';
var LOGOUT = 'LOGOUT';
var SET_TOKEN = 'SET_TOKEN';
var SignUp = /** @class */ (function () {
    function SignUp() {
        this.type = SIGNUP;
    }
    return SignUp;
}());

var SignIn = /** @class */ (function () {
    function SignIn() {
        this.type = SIGNIN;
    }
    return SignIn;
}());

var LogOut = /** @class */ (function () {
    function LogOut() {
        this.type = LOGOUT;
    }
    return LogOut;
}());

var SetToken = /** @class */ (function () {
    function SetToken(payload) {
        this.payload = payload;
        this.type = SET_TOKEN;
    }
    return SetToken;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: AuthReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthReducer", function() { return AuthReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");


;
var initalState = {
    token: null,
    authenticated: false
};
function AuthReducer(state, action) {
    if (state === void 0) { state = initalState; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["SIGNUP"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { authenticated: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["SIGNIN"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { authenticated: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { authenticated: false, token: null });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["SET_TOKEN"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { token: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\"  class=\"navbar-brand\">Recipe Book</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <ng-template [ngIf]=\"! (authState | async).authenticated\">\n          <li><a routerLink=\"/signin\">Login</a></li>\n          <li><a routerLink=\"/signup\">Register</a></li>\n        </ng-template>\n        <li><a (click)=\"onLogOut()\" *ngIf=\"(authState | async).authenticated\">Log Out</a></li>\n        <li class=\"dropdown\" appDropdown *ngIf=\"(authState | async).authenticated\">\n          <a class=\"dropdown-toggle\" role=\"button\">More <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a (click)=\"onSaveData()\">Save</a></li>\n            <li><a (click)=\"onFetchData()\">Fetch</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/database.service */ "./src/app/shared/database.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(database, auth, store) {
        this.database = database;
        this.auth = auth;
        this.store = store;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    HeaderComponent.prototype.onSaveData = function () {
        this.database.save();
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.database.fetch();
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.auth.LogOut();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-img-detail{\n    max-height: 300px;\n}\n\n#manage-dropdown{\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBlLWltZy1kZXRhaWx7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbiNtYW5hZ2UtZHJvcGRvd257XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img [src]=\"(recipeState | async).recipes[id].imagePath\" alt=\"{{ (recipeState | async).recipes[id].name }}\" class=\"img-responive recipe-img-detail\" >\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ (recipeState | async).recipes[id].name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"btn-group\" id='manage-dropdown' appDropdown>\n      <button class=\"btn btn-primary dropdown-toggle\">Manage <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <li><a (click)=\"addToCart()\">Add to Cart</a></li>\n        <li><a (click)=\"onEditRecipe()\">Edit</a></li>\n        <li><a (click)=\"onDeleteRecipe()\">Delete</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n      <p>{{ (recipeState | async).recipes[id].description }}</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let ing of (recipeState | async).recipes[id].ingredients\">\n          {{ ing.name }} - {{ ing.amount }}\n        </li>\n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shopping-list/store/shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");
/* harmony import */ var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");







var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipeState = _this.store.select('recipes');
        });
    };
    RecipeDetailComponent.prototype.addToCart = function () {
        var _this = this;
        this.store.select('recipes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (recipeState) {
            _this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__["AddIngredients"](recipeState.recipes[_this.id].ingredients));
        });
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    RecipeDetailComponent.prototype.onDeleteRecipe = function () {
        this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteRecipe"](this.id));
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-btns{\n    display: flex;\n    justify-content: space-between;\n    margin: 20px 0;\n}\n\n.ing-row{\n    margin: 10px 0;\n}\n\n.add-ing{\n    margin: 10px 0;\n}\n\n/* FORM VALIDATION STYLES */\n\ninput.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched{\n    border: 1px solid #e73333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsMkJBQTJCOztBQUMzQjtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sLWJ0bnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5pbmctcm93e1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uYWRkLWluZ3tcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuLyogRk9STSBWQUxJREFUSU9OIFNUWUxFUyAqL1xuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLCB0ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3MzMzMztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 control-btns\">\n          <button type=\"submit\" [disabled]=\"!recipeForm.valid\" class=\"btn btn-success\">Save</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onFormCancel()\">Cancel</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName='name'>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"image\">Image URL</label>\n            <input type=\"text\" id=\"image\" class=\"form-control\" formControlName='image' #image>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <img [src]=\"image.value\" class=\"img-responsive\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea type=\"text\" class=\"form-control\" id=\"description\" rows=\"6\" formControlName='description'></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\" formArrayName=\"ingredients\">\n          <div class=\"row ing-row\" *ngFor=\"let ingredientCtrl of getControls(); let i = index\" [formGroupName]=\"i\">\n            <div class=\"col-xs-8\">\n              <input type=\"text\" class=\"form-control\" formControlName='name'>\n            </div>\n            <div class=\"col-xs-2\">\n              <input type=\"number\" class=\"form-control\" formControlName='amount'>\n            </div>\n            <div class=\"col-xs-2\">\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteIngredient(i)\">X</button>\n            </div>\n          </div>\n          <hr />\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button type=\"button\" class=\"btn btn-success add-ing\" (click)=\"onAddIngredient()\">Add Ingredient</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");







var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.isEditing = params['id'] != null;
            _this.initForm();
        });
    };
    // Form Initalization
    RecipeEditComponent.prototype.initForm = function () {
        var _this = this;
        var recipeName = '';
        var recipeURL = '';
        var recipeDescription = '';
        var recipeIng = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.isEditing) {
            this.store.select('recipes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (recipeState) {
                var recipe = recipeState.recipes[_this.id];
                recipeName = recipe.name;
                recipeURL = recipe.imagePath;
                recipeDescription = recipe.description;
                if (recipe.ingredients) {
                    for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                        var ing = _a[_i];
                        recipeIng.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ing.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ing.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[1-9]+[0-9]*')])
                        }));
                    }
                }
            });
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeURL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'ingredients': recipeIng
        });
    };
    // Add New Ingredient Input in the form
    RecipeEditComponent.prototype.getControls = function () {
        return this.recipeForm.get('ingredients').controls;
    };
    // Form Submit
    RecipeEditComponent.prototype.onSubmit = function () {
        if (this.isEditing) {
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateRecipe"]({ index: this.id, updatedRecipe: this.recipeForm.value }));
        }
        else {
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__["AddRecipe"](this.recipeForm.value));
        }
        this.onNavigatefromForm();
    };
    // Form Cancel
    RecipeEditComponent.prototype.onFormCancel = function () {
        this.onNavigatefromForm();
    };
    // navigate from Form
    RecipeEditComponent.prototype.onNavigatefromForm = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    // Addinng New Ingredients
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[1-9]+[0-9]*')])
        }));
    };
    // Deleting Ingredients
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-edit',
            template: __webpack_require__(/*! ./recipe-edit.component.html */ "./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-img{\n    max-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtaXRlbS9yZWNpcGUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtaXRlbS9yZWNpcGUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1pbWd7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[index]\" routerLinkActive=\"active\" class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-heading\">{{ recipe.name }}</h4>\n    <p class=\"list-group-item-text\">{{ recipe.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n    <img src=\"{{ recipe.imagePath }}\" alt=\"{{ recipe.name }}\" class=\"img-responsive recipe-img\" >  \n  </span>\n</a>"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipes/recipe.model.ts");



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item *ngFor=\"let recipeElem of (recipeState | async).recipes, let i = index\" [recipe]=\"recipeElem\" [index]=\"i\"></app-recipe-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipeState = this.store.select('recipes');
    };
    // Clicking New Recipe Button
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-routes.module.ts":
/*!**************************************************!*\
  !*** ./src/app/recipes/recipes-routes.module.ts ***!
  \**************************************************/
/*! exports provided: RecipesRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesRoutesModule", function() { return RecipesRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes-start/recipes-start.component */ "./src/app/recipes/recipes-start/recipes-start.component.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");








var recipesRoutes = [
    { path: 'recipes', component: _recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], children: [
            { path: '', component: _recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipesStartComponent"] },
            { path: 'new', component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: ':id', component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailComponent"] },
            { path: ':id/edit', component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
        ] }
];
var RecipesRoutesModule = /** @class */ (function () {
    function RecipesRoutesModule() {
    }
    RecipesRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(recipesRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RecipesRoutesModule);
    return RecipesRoutesModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-start/recipes-start.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipes-start/recipes-start.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-start{\n    margin: 20px 20px 0 0;\n    padding: 20px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLXN0YXJ0L3JlY2lwZXMtc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLXN0YXJ0L3JlY2lwZXMtc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGUtc3RhcnR7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/recipes/recipes-start/recipes-start.component.html":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipes-start/recipes-start.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipe-start\">\n    <h3>Please Select a Recipe!</h3>\n</div>"

/***/ }),

/***/ "./src/app/recipes/recipes-start/recipes-start.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipes-start/recipes-start.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipesStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesStartComponent", function() { return RecipesStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipesStartComponent = /** @class */ (function () {
    function RecipesStartComponent() {
    }
    RecipesStartComponent.prototype.ngOnInit = function () {
    };
    RecipesStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes-start',
            template: __webpack_require__(/*! ./recipes-start.component.html */ "./src/app/recipes/recipes-start/recipes-start.component.html"),
            styles: [__webpack_require__(/*! ./recipes-start.component.css */ "./src/app/recipes/recipes-start/recipes-start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesStartComponent);
    return RecipesStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-recipe-list></app-recipe-list>\n    </div>\n    <div class=\"col-md-7\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipes_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes-routes.module */ "./src/app/recipes/recipes-routes.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes-start/recipes-start.component */ "./src/app/recipes/recipes-start/recipes-start.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");












var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    RecipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipesComponent"],
                _recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_7__["RecipesStartComponent"],
                _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__["RecipeListComponent"],
                _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__["RecipeItemComponent"],
                _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailComponent"],
                _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_11__["RecipeEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _recipes_routes_module__WEBPACK_IMPORTED_MODULE_4__["RecipesRoutesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], RecipesModule);
    return RecipesModule;
}());



/***/ }),

/***/ "./src/app/recipes/store/recipe.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.actions.ts ***!
  \*************************************************/
/*! exports provided: SET_RECIPES, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE, FETCH_RECIPES, SetRecipes, AddRecipe, UpdateRecipe, DeleteRecipe, FetchRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RECIPES", function() { return SET_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECIPE", function() { return ADD_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RECIPE", function() { return UPDATE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RECIPE", function() { return DELETE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES", function() { return FETCH_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRecipes", function() { return SetRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipe", function() { return AddRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRecipe", function() { return UpdateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRecipe", function() { return DeleteRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipes", function() { return FetchRecipes; });
// Action Types 
var SET_RECIPES = 'SET_RECIPES';
var ADD_RECIPE = 'ADD_RECIPE';
var UPDATE_RECIPE = 'UPDATE_RECIPE';
var DELETE_RECIPE = 'DELETE_RECIPE';
var FETCH_RECIPES = 'FETCH_RECIPES';
var SetRecipes = /** @class */ (function () {
    function SetRecipes(payload) {
        this.payload = payload;
        this.type = SET_RECIPES;
    }
    return SetRecipes;
}());

var AddRecipe = /** @class */ (function () {
    function AddRecipe(payload) {
        this.payload = payload;
        this.type = ADD_RECIPE;
    }
    return AddRecipe;
}());

var UpdateRecipe = /** @class */ (function () {
    function UpdateRecipe(payload) {
        this.payload = payload;
        this.type = UPDATE_RECIPE;
    }
    return UpdateRecipe;
}());

var DeleteRecipe = /** @class */ (function () {
    function DeleteRecipe(payload) {
        this.payload = payload;
        this.type = DELETE_RECIPE;
    }
    return DeleteRecipe;
}());

var FetchRecipes = /** @class */ (function () {
    function FetchRecipes() {
        this.type = FETCH_RECIPES;
    }
    return FetchRecipes;
}());



/***/ }),

/***/ "./src/app/recipes/store/recipe.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.reducer.ts ***!
  \*************************************************/
/*! exports provided: RecipeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeReducer", function() { return RecipeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");




;
var initalState = {
    recipes: [
        new _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('Burger', 'Umm, What else do you you need?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH1vGJdLWpZIfsM_oxIm9zMZajfgVN2Ov8lAOXswpOVM92OBV', [
            new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Patty', 1),
            new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Burger Buns', 2),
            new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Ketchup', 1)
        ]),
        new _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('Pasta', 'Delicious, creamiest Pasta ever', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bb8ezVNzzLPo5ozj5-5-MiQfL91aAhMVUYC5W3qyenfV3bYL', [
            new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Pasta', 1),
            new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Pasta Sauce', 1),
            new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Vegies', 1)
        ])
    ]
};
function RecipeReducer(state, action) {
    if (state === void 0) { state = initalState; }
    switch (action.type) {
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["SET_RECIPES"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { recipes: action.payload.slice() });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_RECIPE"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { recipes: state.recipes.concat([action.payload]) });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_RECIPE"]:
            var recipeToBeUpdated = state.recipes[action.payload.index];
            var updatedRecipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, recipeToBeUpdated, action.payload.updatedRecipe);
            var newRecipes = state.recipes.slice();
            newRecipes[action.payload.index] = updatedRecipe;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { recipes: newRecipes });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_RECIPE"]:
            var oldRecipes = state.recipes.slice();
            oldRecipes.splice(action.payload, 1);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { recipes: oldRecipes });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECIPES"]:
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/database.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/database.service.ts ***!
  \********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipes/store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");






var DatabaseService = /** @class */ (function () {
    function DatabaseService(http, store) {
        this.http = http;
        this.store = store;
        this.URL = 'https://recipe-app-cart.firebaseio.com';
    }
    ;
    // Save Recipes Data
    DatabaseService.prototype.save = function () {
        var _this = this;
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["FetchRecipes"]());
        this.store.select('recipes').subscribe(function (recipes) {
            _this.store.select('auth').subscribe(function (data) {
                _this.http.put(_this.URL + "/recipes.json?auth=" + data.token, recipes.recipes).subscribe();
            });
        });
    };
    // Fetch Recipes Data
    DatabaseService.prototype.fetch = function () {
        var _this = this;
        this.store.select('auth').subscribe(function (data) {
            _this.http.get(_this.URL + "/recipes.json?auth=" + data.token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var recipes = response.json();
                for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                    var recipe = recipes_1[_i];
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            })).subscribe(function (recipes) {
                _this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["SetRecipes"](recipes));
            });
        });
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directives.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/dropdown.directives.ts ***!
  \***********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.directives */ "./src/app/shared/dropdown.directives.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dropdown_directives__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dropdown_directives__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1lZGl0L3Nob3BwaW5nLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWVkaXQvc2hvcHBpbmctZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcbiAgICBtYXJnaW46IDAgNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmitForm(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" ngModel required>\n        </div>\n        <div class=\"col-sm-2\">\n          <label for=\"amount\">Amount</label>\n          <input type=\"number\" id=\"amount\" class=\"form-control\" name=\"amount\" ngModel required pattern=\"^[1-9]+[0-9]*$\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClearForm()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");






var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(store) {
        this.store = store;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('shoppingList').subscribe(function (data) {
            if (data.editedIngredientIndex > -1) {
                _this.editItem = data.editedIngredient;
                _this.form.setValue({
                    name: _this.editItem.name,
                    amount: _this.editItem.amount
                });
                _this.editMode = true;
            }
            else {
                _this.editMode = false;
            }
        });
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__["StopEdit"]());
        this.subscription.unsubscribe();
    };
    ShoppingEditComponent.prototype.onSubmitForm = function (form) {
        var value = form.value;
        var newIng = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateIngredient"]({ ingredient: newIng }));
        }
        else {
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__["AddIngredient"](newIng));
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteIngredient"]());
        this.onClearForm();
    };
    ShoppingEditComponent.prototype.onClearForm = function () {
        this.form.reset();
        this.editMode = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ShoppingEditComponent.prototype, "form", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a class=\"list-group-item\" *ngFor=\"let ing of (shoppingListState | async).ingredients; let i = index\" (click)=\"onEditItem(i)\">\n        {{ ing.name }} ({{ ing.amount }}) \n      </a>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");




var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(store) {
        this.store = store;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.shoppingListState = this.store.select('shoppingList');
    };
    ShoppingListComponent.prototype.onEditItem = function (i) {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__["StartEdit"](i));
    };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");






var ShoppingListModule = /** @class */ (function () {
    function ShoppingListModule() {
    }
    ShoppingListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"],
                _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], ShoppingListModule);
    return ShoppingListModule;
}());



/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.actions.ts ***!
  \**************************************************************/
/*! exports provided: ADD_INGREDIENT, ADD_INGREDIENTS, UPDATE_INGREDIENT, DELETE_INGREDIENT, START_EDIT, STOP_EDIT, AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, StartEdit, StopEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENTS", function() { return ADD_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INGREDIENT", function() { return UPDATE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INGREDIENT", function() { return DELETE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredient", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredients", function() { return AddIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIngredient", function() { return UpdateIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIngredient", function() { return DeleteIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
// Action Types 
var ADD_INGREDIENT = 'ADD_INGREDIENT';
var ADD_INGREDIENTS = 'ADD_INGREDIENTS';
var UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
var DELETE_INGREDIENT = 'DELETE_INGREDIENT';
var START_EDIT = 'START_EDIT';
var STOP_EDIT = 'STOP_EDIT';
var AddIngredient = /** @class */ (function () {
    function AddIngredient(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
    return AddIngredient;
}());

var AddIngredients = /** @class */ (function () {
    function AddIngredients(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
    return AddIngredients;
}());

var UpdateIngredient = /** @class */ (function () {
    function UpdateIngredient(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
    return UpdateIngredient;
}());

var DeleteIngredient = /** @class */ (function () {
    function DeleteIngredient() {
        this.type = DELETE_INGREDIENT;
    }
    return DeleteIngredient;
}());

var StartEdit = /** @class */ (function () {
    function StartEdit(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
    return StartEdit;
}());

var StopEdit = /** @class */ (function () {
    function StopEdit() {
        this.type = STOP_EDIT;
    }
    return StopEdit;
}());



/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.reducer.ts ***!
  \**************************************************************/
/*! exports provided: ShoppingListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListReducer", function() { return ShoppingListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");



;
var initalState = {
    ingredients: [
        new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Burger Bun', 2),
        new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('Pasta', 1)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
function ShoppingListReducer(state, action) {
    if (state === void 0) { state = initalState; }
    switch (action.type) {
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENT"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ingredients: state.ingredients.concat([action.payload]) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENTS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ingredients: state.ingredients.concat(action.payload) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_INGREDIENT"]:
            var ingredient = state.ingredients[state.editedIngredientIndex];
            var updatedIngredient = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, ingredient, action.payload.ingredient);
            var ingredients = state.ingredients.slice();
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ingredients: ingredients, editedIngredient: null, editedIngredientIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_INGREDIENT"]:
            var newIngredients = state.ingredients.slice();
            newIngredients.splice(state.editedIngredientIndex, 1);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ingredients: newIngredients, editedIngredient: null, editedIngredientIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["START_EDIT"]:
            var ing = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.ingredients[action.payload]);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editedIngredient: ing, editedIngredientIndex: action.payload });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["STOP_EDIT"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editedIngredient: null, editedIngredientIndex: -1 });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.reducer */ "./src/app/shopping-list/store/shopping-list.reducer.ts");
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes/store/recipe.reducer */ "./src/app/recipes/store/recipe.reducer.ts");



;
var reducers = {
    shoppingList: _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__["ShoppingListReducer"],
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["AuthReducer"],
    recipes: _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__["RecipeReducer"]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gaurav/Projects/recipe-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map