(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _modal_create_subtheme_create_subtheme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/create-subtheme/create-subtheme.component */ "./src/app/admin/modal/create-subtheme/create-subtheme.component.ts");
/* harmony import */ var _modal_show_subtheme_show_subtheme_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/show-subtheme/show-subtheme.component */ "./src/app/admin/modal/show-subtheme/show-subtheme.component.ts");
/* harmony import */ var _modal_show_theme_show_theme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/show-theme/show-theme.component */ "./src/app/admin/modal/show-theme/show-theme.component.ts");








var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'exercises', loadChildren: './exercise/exercise.module#ExerciseModule' },
            { path: 'answer-exercises', loadChildren: './answer-exercise/answer.module#AnswerExerciseModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'competences', loadChildren: './competence/competence.module#CompetenceModule' },
            { path: 'thematic-content', loadChildren: './thematic-content/thematic-content.module#ThematicModule' },
            { path: 'tests', loadChildren: './test/test.module#TestModule' },
            { path: '', redirectTo: 'thematic-content', pathMatch: 'full' },
            { path: '**', redirectTo: 'thematic-content' }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());

var routedComponents = [
    _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    _modal_create_subtheme_create_subtheme_component__WEBPACK_IMPORTED_MODULE_5__["CreateSubthemeDialog"],
    _modal_show_subtheme_show_subtheme_component__WEBPACK_IMPORTED_MODULE_6__["ShowSubthemeDialog"],
    _modal_show_theme_show_theme_component__WEBPACK_IMPORTED_MODULE_7__["ShowThemeDialog"]
];


/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <header>\n    <app-navbar></app-navbar>\n  </header>\n  <div id='main'>\n    <article>\n      <router-outlet></router-outlet>\n    </article>\n    <nav >\n      <app-sidebar *ngIf=\"user.role === 'Teacher'\"></app-sidebar>\n    </nav>\n    <!--  <aside>\n            <app-aside></app-aside>\n          </aside> -->\n  </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  background: #93a8ad; }\n\n#main {\n  width: calc( 100% - 5rem);\n  position: absolute;\n  min-height: 700px;\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-flow: row; }\n\n#main > article {\n  margin: 4px;\n  padding: 5px;\n  border: 1px solid #dfdfdf00;\n  border-radius: 7pt;\n  background: #ffffff00;\n  flex: 5 3 100%;\n  order: 2; }\n\n#main > nav {\n  margin: 0;\n  padding: 0;\n  border: 1px solid #ffffff00;\n  border-radius: 7pt;\n  display: block;\n  background: #ffffff00;\n  flex: 1 1 5%;\n  order: 1; }\n\n#main > aside {\n  margin: 4px;\n  padding: 5px;\n  border: 1px solid #030707;\n  border-radius: 7pt;\n  background: #0707aa;\n  flex: 1 6 20%;\n  order: 2; }\n\nheader {\n  display: block;\n  background: #2a3332; }\n\nfooter {\n  display: block;\n  width: 100%;\n  min-height: 60px;\n  border: 1px solid #ffffff;\n  border-radius: 7pt;\n  background: #ffffff;\n  z-index: 999; }\n\n/* Too narrow to support three columns */\n\n@media all and (max-width: 40px) {\n  #main, #page {\n    flex-flow: column; }\n  #main > article, #main > nav, #main > aside {\n    /* Return them to document order */\n    order: 0; }\n  #main > nav, #main > aside, header, footer {\n    min-height: 50px;\n    max-height: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VjaGloYS9Eb2N1bWVudHMvUGxhdGZvcm0tR2VvcHJvZ3JhbS9mcm9udGVuZC1nZW9jb2Rlci9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFHO0VBRUMsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0sseUJBQTBCO0VBQ2xDLGtCQUFrQjtFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUVaLGFBQXFCO0VBRWIsY0FBYyxFQUFBOztBQUd2QjtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFYixjQUFjO0VBRWQsUUFBUSxFQUFBOztBQUdqQjtFQUNDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixjQUFlO0VBQ2YscUJBQXFCO0VBRWIsWUFBWTtFQUVaLFFBQVEsRUFBQTs7QUFHakI7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBRVgsYUFBYTtFQUViLFFBQVEsRUFBQTs7QUFHakI7RUFDQyxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDckIsWUFBWSxFQUFBOztBQUlYLHdDQUFBOztBQUNBO0VBRUM7SUFFUyxpQkFBaUIsRUFBQTtFQUcxQjtJQUNDLGtDQUFBO0lBRVEsUUFBUSxFQUFBO0VBR2pCO0lBQ0MsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAubWFpbiB7XG4gICAgXG4gICAgYmFja2dyb3VuZDogIzkzYThhZDtcbiAgIH1cbiBcbiAgICNtYWluIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA1cmVtICk7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWluLWhlaWdodDogNzAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAgICAgICAgIGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgIH1cbiAgXG4gICAjbWFpbiA+IGFydGljbGUge1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmMDA7XG4gICAgYm9yZGVyLXJhZGl1czogN3B0O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYwMDtcbiAgICAtd2Via2l0LWZsZXg6IDUgMyAxMDAlO1xuICAgICAgICAgICAgZmxleDogNSAzIDEwMCU7XG4gICAgLXdlYmtpdC1vcmRlcjogMjtcbiAgICAgICAgICAgIG9yZGVyOiAyO1xuICAgIH1cbiAgIFxuICAgI21haW4gPiBuYXYge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYwMDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHQ7XG4gICAgZGlzcGxheTogIGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYwMDtcbiAgICAtd2Via2l0LWZsZXg6IDEgMSA1JTtcbiAgICAgICAgICAgIGZsZXg6IDEgMSA1JTtcbiAgICAtd2Via2l0LW9yZGVyOiAxO1xuICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuICAgXG4gICAjbWFpbiA+IGFzaWRlIHtcbiAgICBtYXJnaW46IDRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAzMDcwNztcbiAgICBib3JkZXItcmFkaXVzOiA3cHQ7XG4gICAgYmFja2dyb3VuZDogIzA3MDdhYTtcbiAgICAtd2Via2l0LWZsZXg6IDEgNiAyMCU7XG4gICAgICAgICAgICBmbGV4OiAxIDYgMjAlO1xuICAgIC13ZWJraXQtb3JkZXI6IDI7XG4gICAgICAgICAgICBvcmRlcjogMjtcbiAgICB9XG4gIFxuICAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMmEzMzMyO1xuICAgIH1cbiAgICBcbiAgIGZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDdwdDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTk7XG5cbiAgICB9XG4gIFxuICAgLyogVG9vIG5hcnJvdyB0byBzdXBwb3J0IHRocmVlIGNvbHVtbnMgKi9cbiAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQwcHgpIHtcbiAgIFxuICAgICNtYWluLCAjcGFnZSB7XG4gICAgIC13ZWJraXQtZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgfVxuIFxuICAgICNtYWluID4gYXJ0aWNsZSwgI21haW4gPiBuYXYsICNtYWluID4gYXNpZGUge1xuICAgICAvKiBSZXR1cm4gdGhlbSB0byBkb2N1bWVudCBvcmRlciAqL1xuICAgICAtd2Via2l0LW9yZGVyOiAwO1xuICAgICAgICAgICAgIG9yZGVyOiAwO1xuICAgIH1cbiAgIFxuICAgICNtYWluID4gbmF2LCAjbWFpbiA+IGFzaWRlLCBoZWFkZXIsIGZvb3RlciB7XG4gICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@core/services/auth.service */ "./src/app/@core/services/auth.service.ts");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.userObservable$.subscribe(function (res) {
            _this.user = res;
            console.log(res);
        });
    }
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@theme/components/components.module */ "./src/app/@theme/components/components.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modal_create_subtheme_create_subtheme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/create-subtheme/create-subtheme.component */ "./src/app/admin/modal/create-subtheme/create-subtheme.component.ts");
/* harmony import */ var _modal_show_subtheme_show_subtheme_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/show-subtheme/show-subtheme.component */ "./src/app/admin/modal/show-subtheme/show-subtheme.component.ts");
/* harmony import */ var _modal_show_theme_show_theme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/show-theme/show-theme.component */ "./src/app/admin/modal/show-theme/show-theme.component.ts");








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
            ],
            declarations: _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
            entryComponents: [_modal_create_subtheme_create_subtheme_component__WEBPACK_IMPORTED_MODULE_5__["CreateSubthemeDialog"], _modal_show_subtheme_show_subtheme_component__WEBPACK_IMPORTED_MODULE_6__["ShowSubthemeDialog"], _modal_show_theme_show_theme_component__WEBPACK_IMPORTED_MODULE_7__["ShowThemeDialog"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n   \n    <!--\n      <div class=\"row\">\n    \n      <div class=\"col-md-4\">\n        <div class=\"card card-chart\" (click)=\"getRouteCompetition()\">\n          <div class=\"card-header card-header-success\">\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Competencias</h4>\n            <p class=\"card-category\">\n              <span class=\"text-success\"\n                ><i class=\"fa fa-long-arrow-up\"></i> 55%\n              </span>\n              competencias actualmente.\n            </p>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              <i class=\"material-icons\">access_time</i> actualizado hace 4 minutos \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card card-chart\" (click)=\"getRouteLanguage()\">\n          <div class=\"card-header card-header-warning\">\n            <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Lenguajes</h4>\n            <p class=\"card-category\">Tematica de la aplicacion.</p>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"card card-chart\" (click)=\"getRouteExcersice()\">\n          <div class=\"card-header card-header-danger\">\n            <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Ejercicios</h4>\n            <p class=\"card-category\">Todos los ejercicios en la aplicacion</p>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n            </div>\n          </div>\n        </div>\n      </div>\n\n   \n    </div>\n    -->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.getRouteCompetition = function () {
        this.router.navigate(["competition-list"]);
    };
    DashboardComponent.prototype.getRouteTheme = function () {
        this.router.navigate(["theme-list"]);
    };
    DashboardComponent.prototype.getRouteExcersice = function () {
        this.router.navigate(["exersice"]);
    };
    DashboardComponent.prototype.getRouteLanguage = function () {
        this.router.navigate(["language"]);
    };
    DashboardComponent.prototype.getRouteTest = function () {
        this.router.navigate(["test"]);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map