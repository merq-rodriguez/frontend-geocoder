(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competence-competence-module"],{

/***/ "./src/app/admin/competence/championlist/champion-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/competence/championlist/champion-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n   position: fixed !important; \n    top: 0; \n    left: 0; \n    z-index: 1000; \n    width: 100%; \n    height: 100%; \n    overflow:auto;\n}\n\n.image{\n  width: 70px;\n  display: block;\n  margin: auto;\n}\n\n.search{\n  display: block;\n  margin: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcGV0ZW5jZS9jaGFtcGlvbmxpc3QvY2hhbXBpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csMEJBQTBCO0lBQ3pCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFJQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBldGVuY2UvY2hhbXBpb25saXN0L2NoYW1waW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7IFxuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDsgXG4gICAgei1pbmRleDogMTAwMDsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTsgXG4gICAgb3ZlcmZsb3c6YXV0bztcbn1cblxuLmltYWdle1xuICB3aWR0aDogNzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNlYXJjaHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/competence/championlist/champion-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/competence/championlist/champion-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content content\">\n\n  <div class=\"container-fluid \">\n    <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n    <div class=\"\">\n      <div class=\"card-header card-header-success\">\n        <h4 class=\"card-title\">Campeones de la aplicacion</h4>\n        <p class=\"card-category\">Listado de campeones</p>\n      </div>\n      <div class=\"card-body\">\n        <mat-card>\n          <form class=\"example-form\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-md-2 pull-right\">\n                  <img class=\"image\" src=\"../../../../../assets/img/coder-traits.png\">\n                </div>\n                <div class=\"col-md-8 search\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Ingresa el nombre del campeon...\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-2 search\">\n                  <button class=\"btn btn-success pull-right\">\n                    Buscar\n                  </button>\n                </div>\n\n              </div>\n            </div>\n          </form>\n        </mat-card>\n        <br>\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef>No.</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.position }}\n              </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef>Name</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"weight\">\n              <th mat-header-cell *matHeaderCellDef>Weight</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.weight }}</td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"symbol\">\n              <th mat-header-cell *matHeaderCellDef>Symbol</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.symbol }}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n          </table>\n\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"card-stats\"></div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/competence/championlist/champion-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/competence/championlist/champion-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChampionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionListComponent", function() { return ChampionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ChampionListComponent = /** @class */ (function () {
    function ChampionListComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ChampionListComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    ChampionListComponent.prototype.getRoutesItem = function () {
        return ROUTES_COMPETENCE;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ChampionListComponent.prototype, "paginator", void 0);
    ChampionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-champion-list",
            template: __webpack_require__(/*! ./champion-list.component.html */ "./src/app/admin/competence/championlist/champion-list.component.html"),
            styles: [__webpack_require__(/*! ./champion-list.component.css */ "./src/app/admin/competence/championlist/champion-list.component.css")]
        })
    ], ChampionListComponent);
    return ChampionListComponent;
}());

var ROUTES_COMPETENCE = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { path: '/admin/competences/menu-competence', icon: "school", title: "Menu Competencias", class: "", active: true },
    { path: '', icon: "school", title: "Campeones", class: "", active: false },
];
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/admin/competence/competence-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/competence/competence-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CompetenceRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenceRoutingModule", function() { return CompetenceRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _competition_menu_competence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competition-menu/competence.component */ "./src/app/admin/competence/competition-menu/competence.component.ts");
/* harmony import */ var _championlist_champion_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./championlist/champion-list.component */ "./src/app/admin/competence/championlist/champion-list.component.ts");
/* harmony import */ var _create_competition_create_competence_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-competition/create-competence.component */ "./src/app/admin/competence/create-competition/create-competence.component.ts");
/* harmony import */ var _competence_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competence.component */ "./src/app/admin/competence/competence.component.ts");
/* harmony import */ var _competitionlist_competence_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./competitionlist/competence-list.component */ "./src/app/admin/competence/competitionlist/competence-list.component.ts");
/* harmony import */ var _map_competence_map_competence_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-competence/map-competence.component */ "./src/app/admin/competence/map-competence/map-competence.component.ts");
/* harmony import */ var _map_competence_html_marker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-competence/html-marker.component */ "./src/app/admin/competence/map-competence/html-marker.component.ts");










var routes = [{
        path: '',
        component: _competence_component__WEBPACK_IMPORTED_MODULE_6__["CompetenceComponent"],
        children: [
            { path: 'menu-competence', component: _competition_menu_competence_component__WEBPACK_IMPORTED_MODULE_3__["CompetenceMenuComponent"] },
            { path: 'champion-competence', component: _championlist_champion_list_component__WEBPACK_IMPORTED_MODULE_4__["ChampionListComponent"] },
            { path: 'create-competence', component: _create_competition_create_competence_component__WEBPACK_IMPORTED_MODULE_5__["CreateCompetenceComponent"] },
            { path: 'competence-list', component: _competitionlist_competence_list_component__WEBPACK_IMPORTED_MODULE_7__["CompetenceListComponent"] },
            { path: 'map-competence', component: _map_competence_map_competence_component__WEBPACK_IMPORTED_MODULE_8__["MapCompetenceComponent"] },
        ],
    }];
var CompetenceRoutingModule = /** @class */ (function () {
    function CompetenceRoutingModule() {
    }
    CompetenceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CompetenceRoutingModule);
    return CompetenceRoutingModule;
}());

var routedComponents = [
    _competence_component__WEBPACK_IMPORTED_MODULE_6__["CompetenceComponent"],
    _competition_menu_competence_component__WEBPACK_IMPORTED_MODULE_3__["CompetenceMenuComponent"],
    _championlist_champion_list_component__WEBPACK_IMPORTED_MODULE_4__["ChampionListComponent"],
    _create_competition_create_competence_component__WEBPACK_IMPORTED_MODULE_5__["CreateCompetenceComponent"],
    _competitionlist_competence_list_component__WEBPACK_IMPORTED_MODULE_7__["CompetenceListComponent"],
    _map_competence_map_competence_component__WEBPACK_IMPORTED_MODULE_8__["MapCompetenceComponent"],
    _map_competence_html_marker_component__WEBPACK_IMPORTED_MODULE_9__["HTMLMarkerComponent"]
];


/***/ }),

/***/ "./src/app/admin/competence/competence.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/competence/competence.component.ts ***!
  \**********************************************************/
/*! exports provided: CompetenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenceComponent", function() { return CompetenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompetenceComponent = /** @class */ (function () {
    function CompetenceComponent() {
    }
    CompetenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-competence',
            template: "\n    <router-outlet> </router-outlet>\n  ",
        })
    ], CompetenceComponent);
    return CompetenceComponent;
}());



/***/ }),

/***/ "./src/app/admin/competence/competence.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/competence/competence.module.ts ***!
  \*******************************************************/
/*! exports provided: CompetenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenceModule", function() { return CompetenceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _competence_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./competence-routing.module */ "./src/app/admin/competence/competence-routing.module.ts");
/* harmony import */ var src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@theme/components/components.module */ "./src/app/@theme/components/components.module.ts");
/* harmony import */ var _map_competence_html_marker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-competence/html-marker.component */ "./src/app/admin/competence/map-competence/html-marker.component.ts");





var CompetenceModule = /** @class */ (function () {
    function CompetenceModule() {
    }
    CompetenceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _competence_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompetenceRoutingModule"]
            ],
            declarations: _competence_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
            entryComponents: [_map_competence_html_marker_component__WEBPACK_IMPORTED_MODULE_4__["HTMLMarkerComponent"]]
        })
    ], CompetenceModule);
    return CompetenceModule;
}());



/***/ }),

/***/ "./src/app/admin/competence/competition-menu/competence.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/competence/competition-menu/competence.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  width: 70%;\n  display:block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcGV0ZW5jZS9jb21wZXRpdGlvbi1tZW51L2NvbXBldGVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBldGVuY2UvY29tcGV0aXRpb24tbWVudS9jb21wZXRlbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OmJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/competence/competition-menu/competence.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/competence/competition-menu/competence.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n  <div class=\"container-fluid\">\n    <div class=\"row d-flex justify-content-center\">\n\n      <div *ngFor=\"let item of menuArray\" class=\"col-4\">\n        <app-card-menu [item]=\"item\"></app-card-menu>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/competence/competition-menu/competence.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/competence/competition-menu/competence.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompetenceMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenceMenuComponent", function() { return CompetenceMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompetenceMenuComponent = /** @class */ (function () {
    function CompetenceMenuComponent() {
        this.menuArray = [
            {
                name: 'Crear una competencia',
                subtitle: 'Competencias',
                image: '../../../../../assets/img/compe.png',
                description: '¡Animate! entra aqui y crea una competencia.',
                routeLink: '/admin/competences/create-competence'
            },
            {
                name: 'Ver todos los competencias',
                subtitle: 'Competencias',
                description: ' Entra aqui si quieres ver todos los competencias.',
                image: '../../../../../assets/img/mundo.png',
                routeLink: '/admin/competences/competence-list'
            },
            {
                name: 'Estadisticas',
                subtitle: 'Lenguajes',
                description: 'Crea un lenguaje de programacion.',
                image: '../../../../assets/img/compe2.png',
                routeLink: ''
            }
        ];
    }
    CompetenceMenuComponent.prototype.ngOnInit = function () { };
    CompetenceMenuComponent.prototype.getRoutesItem = function () {
        return ROUTES_COMPETENCE;
    };
    CompetenceMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-competence-menu",
            template: __webpack_require__(/*! ./competence.component.html */ "./src/app/admin/competence/competition-menu/competence.component.html"),
            styles: [__webpack_require__(/*! ./competence.component.css */ "./src/app/admin/competence/competition-menu/competence.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompetenceMenuComponent);
    return CompetenceMenuComponent;
}());

var ROUTES_COMPETENCE = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { path: '', icon: "school", title: "Menu Competencias", class: "", active: false },
];


/***/ }),

/***/ "./src/app/admin/competence/create-competition/create-competence.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/competence/create-competition/create-competence.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 400px;\n  margin: 0px;\n}\n\n.container-map {\n  margin-top: 70px;\n  margin-left: 40px;\n  margin-right: 40px;\n}\n\nmat-slider {\n  width: 100%;\n}\n\n.card-slider {\n  box-shadow: 0px 0px 6px 0px rgba(0,0,0,1);\n}\n\n.example-card {\n  max-width: 300px;\n  height: 200px;\n}\n\n.example-header-image {\n  background-image: url(\"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjFpfL-1NHgAhWGg-AKHakUB7gQjRx6BAgBEAU&url=https%3A%2F%2Fkeepcoding.io%2Fes%2Fblog%2Fcaracteristicas-lenguaje-de-programacion-go%2F&psig=AOvVaw13mB9gzQ_hVrPboMd_oX99&ust=1551004693168616\");\n  background-size: cover;\n}\n\n.image-step1{\n  display: block;\n  width: 50px;\n  margin: auto;\n}\n\n.image-step2{\n  display: block;\n  width: 50px;\n  margin: auto;\n}\n\n.info-label{\n  display: block;\n  margin: auto;\n  \n}\n\n.card-header{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n.card-button{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcGV0ZW5jZS9jcmVhdGUtY29tcGV0aXRpb24vY3JlYXRlLWNvbXBldGVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUdFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4UkFBOFI7RUFDOVIsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZOztBQUVkOztBQUVBO0VBQ0UsOEVBQThFO0FBQ2hGOztBQUVBO0VBQ0UsOEVBQThFO0FBQ2hGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcGV0ZW5jZS9jcmVhdGUtY29tcGV0aXRpb24vY3JlYXRlLWNvbXBldGVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNvbnRhaW5lci1tYXAge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG5tYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLXNsaWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMCwwLDAsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMCwwLDAsMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCByZ2JhKDAsMCwwLDEpO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS91cmw/c2E9aSZzb3VyY2U9aW1hZ2VzJmNkPSZjYWQ9cmphJnVhY3Q9OCZ2ZWQ9MmFoVUtFd2pGcGZMLTFOSGdBaFdHZy1BS0hha1VCN2dRalJ4NkJBZ0JFQVUmdXJsPWh0dHBzJTNBJTJGJTJGa2VlcGNvZGluZy5pbyUyRmVzJTJGYmxvZyUyRmNhcmFjdGVyaXN0aWNhcy1sZW5ndWFqZS1kZS1wcm9ncmFtYWNpb24tZ28lMkYmcHNpZz1BT3ZWYXcxM21COWd6UV9oVnJQYm9NZF9vWDk5JnVzdD0xNTUxMDA0NjkzMTY4NjE2XCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5cbi5pbWFnZS1zdGVwMXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbWFnZS1zdGVwMntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbmZvLWxhYmVse1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBcbn1cblxuLmNhcmQtaGVhZGVye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZWE3YTAsICMwYjRlNWEpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlciA7XG59XG5cbi5jYXJkLWJ1dHRvbntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWVhN2EwLCAjMGI0ZTVhKSBuby1yZXBlYXQgMCAwIC8gY292ZXIgO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/competence/create-competition/create-competence.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/competence/create-competition/create-competence.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-default card-header\">\n            <h4 class=\"card-title\">Crear una competencia</h4>\n            <p class=\"card-category\">\n              Aqui puedes crear una competencia amiguito.\n            </p>\n          </div>\n          <div class=\"card-body\">\n            <mat-horizontal-stepper linear #stepper [linear]=\"isOptional\">\n              <mat-step [stepControl]=\"firstFormGroup\">\n                <form [formGroup]=\"firstFormGroup\">\n                  <ng-template matStepLabel>Datos de competencia</ng-template>\n\n                  <br />\n                  <mat-card>\n                    <div class=\"row\">\n                      <div class=\"col-md-2 text-center \">\n                        <img class=\"image-step1\" src=\"../../../../../assets/img/coder2.png\" />\n                      </div>\n\n                      <div class=\"col-md-10\">\n                        <label for=\"\" class=\"info-label\">\n                          Tienes que ingresar los datos necesarios para crear\n                          una competencia, recuerda seleccionar el tipo de\n                          localizacion para asi definir el siguiente paso.\n                        </label>\n                      </div>\n                    </div>\n                  </mat-card>\n                  <br />\n\n                  <mat-card>\n                    <div class=\"container\">\n                      <div class=\"row\">\n                        <div class=\"col-md-8\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput formControlName=\"nameCtrl\" placeholder=\"Nombre de la competencia\"\n                              required />\n                          </mat-form-field>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <mat-form-field class=\"example-full-width\">\n                            <textarea matInput formControlName=\"descriptionCtrl\" placeholder=\"Descripcion\" rows=\"4\"\n                              required></textarea>\n                          </mat-form-field>\n                        </div>\n                      </div>\n\n                      <image-preview (onChange)=\"getFile($event)\"></image-preview>\n\n\n                      <hr />\n\n                      <div class=\"row\">\n                        <div class=\"col-md-5\">\n                          <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\"\n                              placeholder=\"Elige una fecha para la competencia\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input type=\"time\" matInput placeholder=\"Hora inicio\" formControlName=\"inithourCtrl\"\n                              required />\n                          </mat-form-field>\n                        </div>\n                        <!-- \n                        <div class=\"col-md-5\">\n                          <mat-form-field>\n                            <mat-select placeholder=\"Tipo de localizacion\">\n                              <mat-option\n                                *ngFor=\"let food of type_competence\"\n                                [value]=\"food.name\"\n                              >\n                                {{ food.name }}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div> -->\n\n                      </div>\n\n                      <hr />\n\n                    </div>\n                  </mat-card>\n\n                  <div>\n                    <button mat-button matStepperNext>Siguiente</button>\n                  </div>\n                </form>\n              </mat-step>\n\n              <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\n                <form [formGroup]=\"secondFormGroup\">\n                  <ng-template matStepLabel>Datos de localizacion</ng-template>\n\n                  <br />\n                  <mat-card>\n                    <div class=\"row\">\n                      <div class=\"col-md-2 text-center\">\n                        <img class=\"image-step2\" src=\"../../../../../assets/img/globe.png\" />\n                      </div>\n\n                      <div class=\"col-md-10\">\n                        <label for=\"\" class=\"info-label\">\n                          {{\n                            false\n                              ? \"Elegiste multiples ubicaciones geograficas, por lo tanto debes elegir las ubicaciones para posteriormente  asignarlas a un test de evaluacion, no olvides especificar los radios de cada coordenada.\"\n                              : \"Elegiste una ubicacion geografica, selecciona la ubicacion geografica deseada a continuacion, no olvides especificar el radio que abarcara las coordenadas de la  competencia.\"\n                          }}\n                        </label>\n                      </div>\n                    </div>\n                  </mat-card>\n\n                  <br />\n                  <mat-card>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-md-4\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Latitud\" type=\"number\" formControlName=\"latitudeCtrl\" [(ngModel)]=\"newCoordinate.lat\" />\n                          </mat-form-field>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Longitud\" type=\"number\" formControlName=\"longitudeCtrl\" [(ngModel)]=\"newCoordinate.lng\"/>\n                          </mat-form-field>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input type=\"number\" matInput placeholder=\"Radio\" formControlName=\"radiusCtrl\" [(ngModel)]=\"newCoordinate.radius\"/>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                    </div>\n                  </mat-card>\n                  <br />\n\n                  <br />\n                  <div class=\"container\">\n                  \n                  </div>\n                  <br />\n                  <app-map (coordinateChange)=\"getCoordinate($event)\"></app-map>\n                  <br />\n               \n                  <br />\n\n                  <mat-card class=\"\">\n                    <div class=\"row\">\n                      <div class=\"col-md-10\">\n                        <mat-slider thumbLabel matTooltip=\"Desliza para generar un radio de competencia\"\n                          [displayWith]=\"formatLabel\" tickInterval=\"100\" min=\"1\" max=\"10000\"></mat-slider>\n                      </div>\n\n                      <div class=\"col-md-2\">\n                        <button mat-raised-button matTooltip=\"Crear Coordenada\" [matTooltipPosition]=\"'above'\"\n                          type=\"button\" class=\"btn btn-default pull-right  btn-just-icon card-button\">\n                          <i class=\"material-icons\">\n                            add_box\n                          </i>\n                        </button>\n                      </div>\n                    </div>\n                  </mat-card>\n                  <br />\n                  <!-- <mat-card>\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\" text-primary\">\n                          <th>\n                            ID\n                          </th>\n                          <th>\n                            Latitud\n                          </th>\n                          <th>\n                            Longitud\n                          </th>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td>\n                              1\n                            </td>\n                            <td>\n                              09.2276762276232323\n                            </td>\n                            <td>\n                              12.3276372823782223\n                            </td>\n\n                            <td class=\"td-actions text-right\">\n                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\"\n                                [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"\n                                class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </mat-card> -->\n                  <div>\n                    <button mat-button matStepperPrevious>Atras</button>\n                    <button mat-button matStepperNext>Siguiente</button>\n                  </div>\n                </form>\n              </mat-step>\n\n              <mat-step>\n                <ng-template matStepLabel>Elegir Test</ng-template>\n                <mat-card>\n                  <div class=\"row\">\n                    <div class=\"col-md-2 text-center \">\n                      <img class=\"image-step1\" src=\"../../../../../assets/img/programmer.png\" />\n                    </div>\n\n                    <div class=\"col-10\">\n                      <div class=\"col-8\">\n                        <label for=\"\" class=\"info-label\">\n                          Tienes que seleccionar el tipo de test de evaluacion\n                        </label>\n                      </div>\n                      <div class=\"col-8\">\n                        <mat-form-field>\n                          <mat-select placeholder=\"Tipo de evaluacion\" [(value)]=\"selectType\">\n                            <mat-option *ngFor=\"let type of typestest\" [value]=\"type.value\">\n                              {{ type.viewValue }}\n                            </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <br />\n\n                    <!--   <div class=\"container \" [hidden]=\"selectType !== '0'\">\n                      <div class=\"row d-flex justify-content-center\">\n                        <div class=\"col\" *ngFor=\"let item of testQuestions\">\n                          <app-card [item]=\"item\" type=\"'test'\"></app-card>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"container\" [hidden]=\"selectType !== '1'\">\n                      <div class=\"row d-flex justify-content-center\">\n                        <div class=\"col\" *ngFor=\"let item of testExercise\">\n                          <app-card [item]=\"item\"></app-card>\n                        </div>\n                      </div>\n                    </div> -->\n                  </div>\n                </mat-card>\n                <br />\n\n                <div>\n                  <button mat-button matStepperPrevious>Atras</button>\n                  <button mat-button matStepperNext>Siguiente</button>\n                </div>\n              </mat-step>\n\n              <mat-step>\n                <ng-template matStepLabel>Terminar</ng-template>\n                <mat-card>\n                  <mat-card-title>\n                    Has terminado\n                  </mat-card-title>\n                  <mat-card-content>\n                    <div class=\"container\">\n                      <div class=\"col-12\">\n                        Ya has terminado, ahora guarda los datos de la\n                        competencia para poder crearla.\n                      </div>\n                      <div class=\"col-12\">\n                        <button class=\"btn btn-default pull-right card-button\">\n                          Guardar\n                        </button>\n                      </div>\n                      <br />\n                      <br />\n                    </div>\n                  </mat-card-content>\n                </mat-card>\n                <div>\n                  <button mat-button matStepperPrevious>Atras</button>\n                  <button mat-button (click)=\"stepper.reset()\">\n                    Siguiente\n                  </button>\n                </div>\n              </mat-step>\n            </mat-horizontal-stepper>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"card-stats\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/competence/create-competition/create-competence.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/competence/create-competition/create-competence.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateCompetenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompetenceComponent", function() { return CreateCompetenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CreateCompetenceComponent = /** @class */ (function () {
    function CreateCompetenceComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
        this.listCoordinates = [];
        this.testQuestions = [];
        this.testExercise = [];
        this.hiddenTimeEnd = false;
        this.isLinear = false;
        this.valueSlider = 0;
        this.selectType = "";
        //Fechas datepicker
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        this.newCoordinate = {
            lat: 0,
            lng: 0,
            radius: 0
        };
        this.typestest = [
            { value: "0", viewValue: "Preguntas seleccion multiple" },
            { value: "1", viewValue: "Ejercicios practicos" },
            { value: "2", viewValue: "Otros" }
        ];
    }
    // Da formato de texto a la barra de radio 
    CreateCompetenceComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + "k";
        }
        return value;
    };
    CreateCompetenceComponent.prototype.getCoordinate = function (e) {
        console.log(e);
        this.newCoordinate.lat = e.lat;
        this.newCoordinate.lng = e.lng;
    };
    //Obtener Archivo imagen
    CreateCompetenceComponent.prototype.getFile = function (file) {
        console.log(file);
    };
    CreateCompetenceComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descriptionCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            //dateCtrl: ['', Validators.required]
            inithourCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            latitudeCtrl: '',
            longitudeCtrl: '',
            radiusCtrl: ''
        });
    };
    CreateCompetenceComponent.prototype.getRoutesItem = function () {
        return ROUTES_COMPETENCE;
    };
    CreateCompetenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-competence",
            template: __webpack_require__(/*! ./create-competence.component.html */ "./src/app/admin/competence/create-competition/create-competence.component.html"),
            styles: [__webpack_require__(/*! ./create-competence.component.css */ "./src/app/admin/competence/create-competition/create-competence.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateCompetenceComponent);
    return CreateCompetenceComponent;
}());

var ROUTES_COMPETENCE = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { path: '/admin/competences/menu-competence', icon: "school", title: "Menu Competencias", class: "", active: true },
    { path: '', icon: "school", title: "Crear Competencia", class: "", active: false },
];
/*
type_competence: TypeCompetence[] = [
  { name: "Multiples ubicaciones", message: "¡Exelente eleccion!" },
  { name: "Una ubicacion", message: "¡Fabuloso!" }
]; */
/**
testQuestions  = [
  {

    name: 'Estructuras de datos con Python',
    subtitle: 'Subtitulo del test',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/funciones-en-python-t1.jpg',
    state: true
  },
  {
    name: 'Control de flujo en Go',
    subtitle: 'Subtitulo del test',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/golang.png',
    state: true
  },
  {
    name: 'Websocket en Nodejs',
    subtitle: 'Subtitulo del test',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/server-nodejs.png',
    state: true
  },
  {
    name: 'Hilos en Java',
    subtitle: 'Subtitulo del test',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/coder-cat-2.png',
    state: true
  },
  {
    name: 'Arboles con Python',
    subtitle: 'Subtitulo del test',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/Python-programming.jpg',
    state: true
  }
]


testExercise = [
  {
    name: 'Ejercicios en Python',
    subtitle: 'Grafos',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/pythonn.jpg',
    state: true
  },
  {
    name: 'Ejercicios en Nodejs',
    subtitle: 'Completar',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/coder2.jpg',
    state: true
  },
  {
    name: 'Ejercicios en Go',
    subtitle: 'Subtitulo',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/86_go-programming.png',
    state: true
  },
  {
    name: 'Ciclos en Go',
    subtitle: 'Subtitulo',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/coder-cat-2.png',
    state: true
  },
  {
    name: 'Pilas dinamicas',
    subtitle: 'Subtitulo',
    description: 'Esta es la descripcion del test, es una descripcion muy detallada del ejercicio o lo que sea.',
    image: '../../../../../assets/img/coder-cat-2.png',
    state: true
  }
] */ 


/***/ }),

/***/ "./src/app/admin/competence/map-competence/html-marker.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/competence/map-competence/html-marker.component.ts ***!
  \**************************************************************************/
/*! exports provided: HTMLMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMarkerComponent", function() { return HTMLMarkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HTMLMarkerComponent = /** @class */ (function () {
    function HTMLMarkerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HTMLMarkerComponent.prototype, "data", void 0);
    HTMLMarkerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'html-marker',
            template: "\n    <h3>{{ data.name }}</h3>\n    <p>\n      {{ data.description }}--\n    </p>\n  "
        })
    ], HTMLMarkerComponent);
    return HTMLMarkerComponent;
}());



/***/ }),

/***/ "./src/app/admin/competence/map-competence/map-competence.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/competence/map-competence/map-competence.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n    z-index: 1;\n    height: 100vh;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcGV0ZW5jZS9tYXAtY29tcGV0ZW5jZS9tYXAtY29tcGV0ZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBldGVuY2UvbWFwLWNvbXBldGVuY2UvbWFwLWNvbXBldGVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/admin/competence/map-competence/map-competence.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/competence/map-competence/map-competence.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div \n    leaflet \n    class=\"map\" \n    [leafletOptions]=\"options\" \n    (leafletMapReady)=\"onMapReady($event)\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/competence/map-competence/map-competence.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/competence/map-competence/map-competence.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MapCompetenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCompetenceComponent", function() { return MapCompetenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_services_exercise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@core/services/exercise.service */ "./src/app/@core/services/exercise.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@core/services/auth.service */ "./src/app/@core/services/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



//import { usermarkerList } from "./markers";



var MapCompetenceComponent = /** @class */ (function () {
    function MapCompetenceComponent(exerciseService, authService) {
        this.exerciseService = exerciseService;
        this.authService = authService;
        this.markers = [];
        this.greenIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
            iconUrl: 'https://www.idmworks.com/wp-content/themes/idmworks/images/easyblog_images/537/golang-250.png',
            iconSize: [50, 50],
            iconAnchor: [50, 50],
        });
        this.streetMaps = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            detectRetina: true,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        this.options = {
            layers: [this.streetMaps],
            zoom: 15,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(1.6297586, -75.6055663)
        };
    }
    MapCompetenceComponent.prototype.getIcon = function (data) {
        return Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])(data);
    };
    MapCompetenceComponent.prototype.onMapReady = function (map) {
        // obtener una referencia local al mapa como lo necesitamos más adelante
        this.map = map;
    };
    /*   addMarker(exercises) {
        // simplemente iterar sobre la matriz de marcadores de nuestro servicio de datos
        // y agregarlos al mapa
        for(const entry of this.exerciseService.getMarkers()) {
          // instancia dinámicamente un HTMLMarkerComponent
          const factory = this.resolver.resolveComponentFactory(HTMLMarkerComponent);
    
          // Necesitamos pasar el inyector de dependencia.
          const component = factory.create(this.injector);
    
          // conecte las @Input () o variables planas (no tiene que ser estrictamente una @Input ())
          component.instance.data = entry;
    
          // necesitamos activar manualmente la detección de cambios en nuestro componente en memoria
          // S t. Su plantilla se sincroniza con los datos que pasamos.
          component.changeDetectorRef.detectChanges();
    
    
          // crear un nuevo marcador de Folleto en la posición dada
          let m = marker(entry.position);
    
          // pasar el HTML de nuestro componente dinámico
          const popupContent = component.location.nativeElement;
    
          // agregar funcionalidad emergente
          m.bindPopup(popupContent).openPopup();
    
          // finalmente agregar el marcador al mapa s.t. es visible
          m.addTo(this.map);
    
          // agregar un objeto de metadatos a una matriz local que nos ayude
          // realizar un seguimiento de los marcadores de instancias para eliminarlos / eliminarlos más tarde
          this.markers.push({
            name: entry.name,
            markerInstance: m,
            componentInstance: component
          });
        }
      }
     */
    /*  removeMarker(marker) {
       // eliminarlo de los meta objetos de matriz
       const idx = this.markers.indexOf(marker);
       this.markers.splice(idx, 1);
   
       // quitar el marcador del mapa
       marker.markerInstance.removeFrom(this.map);
   
       // destruir el componente para evitar fugas de memoria
       marker.componentInstance.destroy();
     } */
    // simular algún cambio que necesita
    // para activar actualizaciones en nuestros componentes dinámicos
    /* mutateMarkerData() {
      // esto provoca cambios que los componentes en los marcadores tienen que volver a representar
      this.exerciseService.changeMarkerData();
    } */
    /*  ngDoCheck() {
       // Este es un método de ciclo de vida de un componente angular que se invoca siempre que para
      // se activa nuestra detección de cambio de componente
       this.markers.forEach(entry => {
         entry.componentInstance.changeDetectorRef.detectChanges();
       })
     } */
    MapCompetenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userObservable$.subscribe(function (user) {
            _this.user = user;
            _this.exerciseService.getExercises(_this.user.idUser).subscribe(function (exercises) {
                console.log(" LISTADO DE MARCADORES DE LOS EJERCICIOS");
                console.log(exercises);
                if (exercises) {
                    for (var _i = 0, exercises_1 = exercises; _i < exercises_1.length; _i++) {
                        var ex = exercises_1[_i];
                        var m = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([ex.latitude, ex.longitude], {
                            icon: _this.getIcon({
                                iconUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.geoprogram + 'uploads/images/caca.png',
                                iconSize: [35, 35],
                                iconAnchor: [35, 35],
                            })
                        });
                        var c = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"])([ex.latitude, ex.longitude], {
                            color: 'red',
                            fillColor: '#f03',
                            fillOpacity: 0.5,
                            radius: ex.radius
                        });
                        m.addTo(_this.map);
                        c.addTo(_this.map);
                    }
                }
            });
        });
    };
    MapCompetenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-map-competence",
            template: __webpack_require__(/*! ./map-competence.component.html */ "./src/app/admin/competence/map-competence/map-competence.component.html"),
            styles: [__webpack_require__(/*! ./map-competence.component.css */ "./src/app/admin/competence/map-competence/map-competence.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_exercise_service__WEBPACK_IMPORTED_MODULE_3__["ExerciseService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MapCompetenceComponent);
    return MapCompetenceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=competence-competence-module.js.map