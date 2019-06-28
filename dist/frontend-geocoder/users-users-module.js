(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/admin/users/user-profile/user-profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/users/user-profile/user-profile.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-profile{\n    margin-left: 30px;\n    margin-right: 30px;\n    margin-top: 40px;\n    \n}\n\n\n\n.card-header{\n    background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n  }\n\n\n\n.card-button{\n    background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOzs7O0FBSUE7SUFDSSw4RUFBOEU7RUFDaEY7Ozs7QUFFQTtJQUNFLDhFQUE4RTtFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItcHJvZmlsZXtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBcbn1cblxuXG5cbi5jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZWE3YTAsICMwYjRlNWEpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlciA7XG4gIH1cbiAgXG4gIC5jYXJkLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZWE3YTAsICMwYjRlNWEpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlciA7XG4gIH1cblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/admin/users/user-profile/user-profile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/users/user-profile/user-profile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-profile\">\n\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"main-content\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"card card-profile \">\n                <div class=\"card-avatar avatar\">\n                  <a>\n                    <img class=\"img\" src=\"http://localhost:3001/uploads/images/image-user-default.jpg\" />\n                  </a>\n                </div>\n                <div class=\"card-body\">\n                  <i class=\"material-icons\">edit</i>\n                  <h6 class=\"card-category text-gray\">Rol {{ user.role }}</h6>\n                  <h4 class=\"card-title\">{{ user.name }}</h4>\n\n                  <p class=\"card-description\">\n                    {{ user.about }}\n                  </p>\n\n                  <div>\n                    <h2><b>PUNTOS</b></h2>\n                    <h2> {{ user.points }} </h2>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-8\">\n\n              <div class=\"card\">\n                <br>\n\n\n                <div class=\"card-body\">\n                  <form>\n                    <div class=\"row\">\n\n\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name='username' />\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Correo electronico\" type=\"email\" [(ngModel)]=\"user.email\"\n                            name='email' />\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n\n                      <div class=\"col-md-8\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Nombres\" type=\"text\" [(ngModel)]=\"user.name\" name='name' />\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <hr>\n\n\n             \n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <label>Estado</label>\n                        <mat-form-field class=\"example-full-width\">\n                          <textarea matInput placeholder=\"Ingresa un estado para compartir\" [(ngModel)]=\"user.about\" name='about'></textarea>\n                        </mat-form-field>\n                      \n                      </div>\n                    </div>\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-default pull-right card-button\">\n                      Guardar\n                    </button>\n                    <div class=\"clearfix\"></div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/admin/users/user-profile/user-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/users/user-profile/user-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/services/user.service */ "./src/app/@core/services/user.service.ts");
/* harmony import */ var src_app_core_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@core/services/localstorage.service */ "./src/app/@core/services/localstorage.service.ts");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, localstorajeService) {
        this.userService = userService;
        this.localstorajeService = localstorajeService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (u) { return _this.user = u; });
        if (!this.user) {
            this.user = this.localstorajeService.getLocalstorage('user');
        }
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/admin/users/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/admin/users/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_core_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users-manage/user-manage.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/users/users-manage/user-manage.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  width: 80%;\n  height: 200px;\n}\n\n\n/* .content{\n  margin-left: 30px;\n  margin-right: 30px;\n} */\n\n\ntable {\n  width: 100%;\n}\n\n\n.content-table{\n   margin-top: 80px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: 100%;\n}\n\n\n.card-header{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n\n.card-button{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMtbWFuYWdlL3VzZXItbWFuYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOzs7QUFHQTs7O0dBR0c7OztBQUVIO0VBQ0UsV0FBVztBQUNiOzs7QUFJQTtHQUNHLGdCQUFnQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7O0FBSUE7RUFDRSw4RUFBOEU7QUFDaEY7OztBQUVBO0VBQ0UsOEVBQThFO0FBQ2hGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMtbWFuYWdlL3VzZXItbWFuYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5cbi8qIC5jb250ZW50e1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufSAqL1xuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuLmNvbnRlbnQtdGFibGV7XG4gICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi5jYXJkLWhlYWRlcntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWVhN2EwLCAjMGI0ZTVhKSBuby1yZXBlYXQgMCAwIC8gY292ZXIgO1xufVxuXG4uY2FyZC1idXR0b257XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlYTdhMCwgIzBiNGU1YSkgbm8tcmVwZWF0IDAgMCAvIGNvdmVyIDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/admin/users/users-manage/user-manage.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/users/users-manage/user-manage.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content content\">\n  <div class=\"container-fluid\">\n    \n    <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n    <div class=\"row\">\n      <mat-card>\n        <div class=\"card\" *ngIf=\"isAddUser\">\n          <br>\n          <div class=\"card-header card-header-default card-header\" >\n            <h4 class=\"card-title\">Crea un usuario</h4>\n            <p class=\"card-category\">\n              En esta seccion debe crear usuarios.\n            </p>\n          </div>\n          <br />\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                    <a href=\"#\">\n                      <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n                    </a>\n                  </div>\n                  <div class=\"card-body\">\n                    <i class=\"material-icons\">edit</i>\n                    <h6 class=\"card-category text-gray\">Rol del usuario</h6>\n                    <h4 class=\"card-title\">Nombre del usuario</h4>\n\n                    <p class=\"card-description\">\n                      Don't be scared of the truth because we need to restart\n                      the human foundation in truth And I love you like Kanye\n                      loves Kanye I love Rick Owens’ bed design but the back\n                      is...\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <br />\n              <br />\n              <div class=\"col-md-8\">\n                <div class=\"card-body\">\n                  <form>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Username\" />\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input\n                            matInput\n                            placeholder=\"Correo electronico\"\n                            type=\"email\"\n                          />\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input\n                            matInput\n                            placeholder=\"Primer nombre\"\n                            type=\"text\"\n                          />\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input\n                            matInput\n                            placeholder=\"Segundo nombre\"\n                            type=\"text\"\n                          />\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <hr />\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input\n                            matInput\n                            placeholder=\"Nivel de usuario\"\n                            type=\"text\"\n                          />\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <mat-form-field>\n                          <mat-select placeholder=\"Elija un rol\">\n                            <mat-option\n                              *ngFor=\"let food of foods\"\n                              [value]=\"food.value\"\n                            >\n                              {{ food.viewValue }}\n                            </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <hr />\n\n                    <label>Genero</label>\n                    <div class=\"row\">\n                      <div class=\"col-md-3\">\n                        <div class=\"form-check form-check-radio\">\n                          <label class=\"form-check-label\">\n                            <input\n                              class=\"form-check-input\"\n                              type=\"radio\"\n                              name=\"exampleRadios\"\n                              id=\"exampleRadios1\"\n                              value=\"option1\"\n                            />\n                            Masculino\n                            <span class=\"circle\">\n                              <span class=\"check\"></span>\n                            </span>\n                          </label>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                        <div class=\"form-check form-check-radio\">\n                          <label class=\"form-check-label\">\n                            <input\n                              class=\"form-check-input\"\n                              type=\"radio\"\n                              name=\"exampleRadios\"\n                              id=\"exampleRadios2\"\n                              value=\"option2\"\n                              checked\n                            />\n                            Femenino\n                            <span class=\"circle\">\n                              <span class=\"check\"></span>\n                            </span>\n                          </label>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                        <div class=\"form-check form-check-radio disabled\">\n                          <label class=\"form-check-label\">\n                            <input\n                              class=\"form-check-input\"\n                              type=\"radio\"\n                              name=\"exampleRadios1\"\n                              id=\"exampleRadios1\"\n                              value=\"option1\"\n                              disabled\n                            />\n                            Otro\n                            <span class=\"circle\">\n                              <span class=\"check\"></span>\n                            </span>\n                          </label>\n                        </div>\n                      </div>\n                    </div>\n\n                    <button\n                      mat-raised-button\n                      type=\"submit\"\n                      class=\"btn btn-default pull-right card-button\"\n                    >\n                      Guardar\n                    </button>\n                    <div class=\"clearfix\"></div>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <br />\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-header card-header-default card-header\">\n            <h4 class=\"card-title\">\n              Listado de Usuarios de la aplicacion\n              <!--\n                <button\n                (click)=\"AddUser()\"\n                mat-raised-button\n                matTooltip=\"Crear usuario\"\n                [matTooltipPosition]=\"'above'\"\n                type=\"button\"\n                class=\"btn btn-success pull-right  btn-just-icon\"\n              >\n                <i class=\"material-icons\">\n                  add_box\n                </i>\n              </button>\n              -->\n            </h4>\n            <p class=\"card-category\">\n              En esta seccion puede visualizar los usuarios de la aplicacion.\n            </p>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"mat-elevation-z8\">\n              <table mat-table [dataSource]=\"dataSource\">\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                  <th mat-header-cell *matHeaderCellDef>No.</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.position }}\n                  </td>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"nombres\">\n                  <th mat-header-cell *matHeaderCellDef>Nombres</th>\n                  <td mat-cell *matCellDef=\"let element\">{{ element.nombres }}</td>\n                </ng-container>\n\n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"apellidos\">\n                  <th mat-header-cell *matHeaderCellDef>Apellidos</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.apellidos }}\n                  </td>\n                </ng-container>\n\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"rol\">\n                  <th mat-header-cell *matHeaderCellDef>Rol</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.rol }}\n                  </td>\n                </ng-container>\n\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"nivel\">\n                  <th mat-header-cell *matHeaderCellDef>Nivel</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.nivel }}\n                  </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr\n                  mat-row\n                  *matRowDef=\"let row; columns: displayedColumns\"\n                ></tr>\n              </table>\n\n              <mat-paginator\n                [pageSizeOptions]=\"[5, 10, 20]\"\n                showFirstLastButtons\n              ></mat-paginator>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"main-content content-table\">\n  <div class=\"container-fluid\">\n    <div class=\"row\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/users/users-manage/user-manage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/users/users-manage/user-manage.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManageComponent", function() { return UserManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var UserManageComponent = /** @class */ (function () {
    function UserManageComponent() {
        this.foods = [
            { value: '0', viewValue: 'Administrador' },
            { value: '1', viewValue: 'Jugador' },
            { value: '2', viewValue: 'Docente' }
        ];
        //displayedColumns: string[] = ['position', 'nombres', '           apellidos', 'rol'];
        this.displayedColumns = ['position', 'nombres', 'apellidos', 'rol', 'nivel'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.isAddUser = true;
    }
    UserManageComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    UserManageComponent.prototype.AddUser = function () {
        console.log(this.isAddUser);
        return this.isAddUser = (this.isAddUser == true) ? false : true;
    };
    UserManageComponent.prototype.getRoutesItem = function () {
        console.log(ROUTES_THEMATIC);
        return ROUTES_THEMATIC;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UserManageComponent.prototype, "paginator", void 0);
    UserManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-manage",
            template: __webpack_require__(/*! ./user-manage.component.html */ "./src/app/admin/users/users-manage/user-manage.component.html"),
            styles: [__webpack_require__(/*! ./user-manage.component.css */ "./src/app/admin/users/users-manage/user-manage.component.css")]
        })
    ], UserManageComponent);
    return UserManageComponent;
}());

var ROUTES_THEMATIC = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { icon: "school", title: "Administrar Usuarios", class: "", active: false },
];
var ELEMENT_DATA = [
    { position: 1, nombres: 'Hydrogen', apellidos: 'xxxxxxxxx', rol: 'sadasdasH', nivel: 'assdfggfgfghdsfsf' },
    { position: 2, nombres: 'Helium', apellidos: 'xxxxxxxxx', rol: 'sadasdasHe', nivel: 'assdfggfgfghdsfsf' },
    { position: 3, nombres: 'Lithium', apellidos: 'xxxxxxxxx', rol: 'sadasdasLi', nivel: 'assdfggfgfghdsfsf' },
    { position: 4, nombres: 'Beryllium', apellidos: 'xxxxxxxxx', rol: 'sadasdasBe', nivel: 'assdfggfgfghdsfsf' },
    { position: 5, nombres: 'Boron', apellidos: 'xxxxxxxxx', rol: 'sadasdasB', nivel: 'assdfggfgfghdsfsf' },
    { position: 6, nombres: 'Carbon', apellidos: 'xxxxxxxxx', rol: 'sadasdasC', nivel: 'assdfggfgfghdsfsf' },
    { position: 7, nombres: 'Nitrogen', apellidos: 'xxxxxxxxx', rol: 'sadasdasN', nivel: 'assdfggfgfghdsfsf' },
    { position: 8, nombres: 'Oxygen', apellidos: 'xxxxxxxxx', rol: 'sadasdasO', nivel: 'assdfggfgfghdsfsf' },
    { position: 9, nombres: 'Fluorine', apellidos: 'xxxxxxxxx', rol: 'sadasdasF', nivel: 'assdfggfgfghdsfsf' },
    { position: 10, nombres: 'Neon', apellidos: 'xxxxxxxxx', rol: 'sadasdasNe', nivel: 'assdfggfgfghdsfsf' },
    { position: 11, nombres: 'Sodium', apellidos: 'xxxxxxxxx', rol: 'sadasdasNa', nivel: 'assdfggfgfghdsfsf' },
    { position: 12, nombres: 'Magnesium', apellidos: 'xxxxxxxxx', rol: 'sadasdasMg', nivel: 'assdfggfgfghdsfsf' },
    { position: 13, nombres: 'Aluminum', apellidos: 'xxxxxxxxx', rol: 'sadasdasAl', nivel: 'assdfggfgfghdsfsf' },
    { position: 14, nombres: 'Silicon', apellidos: 'xxxxxxxxx', rol: 'sadasdasSi', nivel: 'assdfggfgfghdsfsf' },
    { position: 15, nombres: 'Phosphorus', apellidos: 'xxxxxxxxx', rol: 'sadasdasP', nivel: 'assdfggfgfghdsfsf' },
    { position: 16, nombres: 'Sulfur', apellidos: 'xxxxxxxxx', rol: 'sadasdasS', nivel: 'assdfggfgfghdsfsf' },
    { position: 17, nombres: 'Chlorine', apellidos: 'xxxxxxxxx', rol: 'sadasdasCl', nivel: 'assdfggfgfghdsfsf' },
    { position: 18, nombres: 'Argon', apellidos: 'xxxxxxxxx', rol: 'sadasdasAr', nivel: 'assdfggfgfghdsfsf' },
    { position: 19, nombres: 'Potassium', apellidos: 'xxxxxxxxx', rol: 'sadasdasK', nivel: 'assdfggfgfghdsfsf' },
    { position: 20, nombres: 'Calcium', apellidos: 'xxxxxxxxx', rol: 'sadasdasCa', nivel: 'assdfggfgfghdsfsf' },
];


/***/ }),

/***/ "./src/app/admin/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/admin/users/user-profile/user-profile.component.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _users_manage_user_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-manage/user-manage.component */ "./src/app/admin/users/users-manage/user-manage.component.ts");






var routes = [{
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
        children: [
            { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"] },
            { path: 'user-manage', component: _users_manage_user_manage_component__WEBPACK_IMPORTED_MODULE_5__["UserManageComponent"] },
        ],
    }];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());

var routedComponents = [
    _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"],
    _users_manage_user_manage_component__WEBPACK_IMPORTED_MODULE_5__["UserManageComponent"]
];


/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-users',
            template: "\n    <router-outlet> </router-outlet>\n  ",
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/admin/users/users-routing.module.ts");
/* harmony import */ var src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@theme/components/components.module */ "./src/app/@theme/components/components.module.ts");




var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"]
            ],
            declarations: _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map