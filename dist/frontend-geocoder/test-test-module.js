(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./src/app/admin/test/create-test/create-test.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admin/test/create-test/create-test.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n\n.separador {\n  margin-bottom: 10px;\n  background-color: #FCFDFD;\n}\n\n.card-header{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n.card-button{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGVzdC9jcmVhdGUtdGVzdC9jcmVhdGUtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSw4RUFBOEU7QUFDaEYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90ZXN0L2NyZWF0ZS10ZXN0L2NyZWF0ZS10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zZXBhcmFkb3Ige1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGREZEO1xufVxuXG5cbi5jYXJkLWhlYWRlcntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWVhN2EwLCAjMGI0ZTVhKSBuby1yZXBlYXQgMCAwIC8gY292ZXIgO1xufVxuXG4uY2FyZC1idXR0b257XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlYTdhMCwgIzBiNGU1YSkgbm8tcmVwZWF0IDAgMCAvIGNvdmVyIDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/admin/test/create-test/create-test.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/test/create-test/create-test.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n  <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-default\">\n            <h4 class=\"card-title\">\n              Evaluacion de los temas de la aplicacion.\n            </h4>\n            <p class=\"card-category\">\n              En esta seccion debe crear los test de evaluacion con sus\n              respectivas preguntas y respuestas validas\n            </p>\n          </div>\n\n          <div class=\"card-body\">\n            <mat-card>\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <div class=\"row\">\n                    <div class=\"col-md-1\">\n                      <i class=\"material-icons\">\n                        event_note\n                      </i>\n                    </div>\n                    <div class=\"col-md-10\">\n                      <p>\n                        En esta seccion debes especificar el tipo de evaluacion\n                        que vas a utilizar.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Tipo de evaluacion\" [(value)]=\"selectType\">\n                      <mat-option *ngFor=\"let type of typestest\" [value]=\"type.value\">\n                        {{ type.viewValue }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-card>\n\n            <div class=\"card-body\">\n              <app-test-exercise *ngIf=\"selectType == '1'\"></app-test-exercise>\n              <app-test-question *ngIf=\"selectType == '0'\"></app-test-question>\n\n\n              <!--        <div class=\"container \" >\n                <div class=\"row d-flex justify-content-center\">\n                  <div class=\"col\" *ngFor=\"let item of testQuestions\">\n                    <app-card [item]=\"item\" ></app-card>\n                  </div>\n\n                </div>\n              </div>\n\n              <div class=\"container \" >\n                <div class=\"row d-flex justify-content-center\">\n                  <div class=\"col\" *ngFor=\"let item of testQuestions\">\n                    <app-card [item]=\"item\" ></app-card>\n                  </div>\n\n                </div>\n              </div>\n -->\n\n\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/test/create-test/create-test.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/test/create-test/create-test.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestComponent", function() { return CreateTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var CreateTestComponent = /** @class */ (function () {
    function CreateTestComponent(router, _formBuilder) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.id = 1;
        this.themeColor = "";
        this.typeTest = "";
        this.selectType = "";
        this.code = "print(\"Hello World\")";
        this.isEditable = false;
        this.typestest = [
            { value: "0", viewValue: "Preguntas seleccion multiple" },
            { value: "1", viewValue: "Ejercicios practicos" },
            { value: "2", viewValue: "Otros" }
        ];
        this.monacoEditState = {
            color: "accent",
            checked: false,
            disabled: false
        };
        this.EditHtmlState = {
            color: "accent",
            checked: false,
            disabled: false
        };
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.toppingList = [
            "Extra cheese",
            "Mushroom",
            "Onion",
            "Pepperoni",
            "Sausage",
            "Tomato"
        ];
        this.exercisesList = [];
        //Model of option new
        this.newOption = {
            name: "",
            veracity: false
        };
        //Model of question new
        this.newQuestion = {
            code: null,
            name: "",
            options: [],
        };
        this.countQuestion = 0;
    }
    CreateTestComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            nameTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descriptionTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            scoreTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            nameQuestionCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            optionQuestionCtrl: []
        });
    };
    CreateTestComponent.prototype.addQuestion = function () {
        /*  let temp: IQuestion = {
           id: uuid(),
           name: this.newQuestion.name,
           code: this.newQuestion.code,
           option: this.newQuestion.option,
           score: this.newQuestion.score,
           state: false
         };
         console.log(temp);
         this.exercisesList.push(temp);
         this.newQuestion.name = "";
         this.clearOption();
         this.clearQuestion();
         console.log(this.exercisesList);
         console.log("¡ID!");
         console.log(this.countQuestion);
         console.log("ID QUESTION NEW");
         console.log(temp.id) */
    };
    CreateTestComponent.prototype.addOptionList = function () {
        /*    let temp: Option = {
             id: this.newOption.id,
             name: this.newOption.name,
             veracity: this.newOption.veracity
           };
       
           console.log("-->", temp.name.length);
           if (temp.name.length === 0 || temp.name.length > 50) {
             console.log("Pailas, la opcion es muy larga");
           } else {
             console.log(temp);
             this.newQuestion.option.push(temp);
             this.newOption.name = "";
             console.log(this.newQuestion.option);
           } */
    };
    CreateTestComponent.prototype.clearQuestion = function () {
        /*  this.newQuestion = {
           code: null,
           name: "",
           options: [],
         }; */
    };
    CreateTestComponent.prototype.clearOption = function () {
        this.newOption = {
            idOption: null,
            name: "",
            veracity: false
        };
    };
    CreateTestComponent.prototype.setStateQuestion = function (id) {
        /* _.forEach(this.exercisesList, function(value: IQuestion) {
          if (value.idQuestion == id) {
            console.log("Encontrado", value);
            if (value.state === true) {
              value.state = false;
            } else {
              console.log("no encontrado");
              value.state = true;
            }
          }
        }); */
    };
    CreateTestComponent.prototype.removeQuestion = function (id) {
        /*     console.log(id);
            _.remove(this.exercisesList, question => {
              return (question.id === id);
            });
            console.log("LISTAAAAAAAAAA --");
            console.log(this.exercisesList) */
    };
    CreateTestComponent.prototype.getNextId = function () {
        /*   if (this.countQuestion === 0) {
            this.countQuestion++;
            return 1;
          } else {
            this.countQuestion++;
            return this.countQuestion;
          } */
    };
    CreateTestComponent.prototype.setModeCoder = function () {
        this.monacoEditState.checked = this.monacoEditState.checked ? false : true;
    };
    CreateTestComponent.prototype.setModeEditHTML = function () {
        this.EditHtmlState.checked = this.EditHtmlState.checked ? false : true;
    };
    CreateTestComponent.prototype.getRoutesItem = function () {
        return ROUTES_TEST;
    };
    CreateTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-test",
            template: __webpack_require__(/*! ./create-test.component.html */ "./src/app/admin/test/create-test/create-test.component.html"),
            styles: [__webpack_require__(/*! ./create-test.component.css */ "./src/app/admin/test/create-test/create-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CreateTestComponent);
    return CreateTestComponent;
}());

var ROUTES_TEST = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { path: '/admin/tests/menu-test', icon: "school", title: "Menu Test", class: "", active: true },
    { icon: "", title: "Evaluacion", class: "", active: false },
];


/***/ }),

/***/ "./src/app/admin/test/test-exercise/test-exercise.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/test/test-exercise/test-exercise.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n\n.separador {\n  margin-bottom: 10px;\n  background-color: #FCFDFD;\n}\n\n.card-header{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n.card-button{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGVzdC90ZXN0LWV4ZXJjaXNlL3Rlc3QtZXhlcmNpc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUlBO0VBQ0UsOEVBQThFO0FBQ2hGOztBQUVBO0VBQ0UsOEVBQThFO0FBQ2hGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdGVzdC90ZXN0LWV4ZXJjaXNlL3Rlc3QtZXhlcmNpc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlcGFyYWRvciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZERkQ7XG59XG5cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlYTdhMCwgIzBiNGU1YSkgbm8tcmVwZWF0IDAgMCAvIGNvdmVyIDtcbn1cblxuLmNhcmQtYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZWE3YTAsICMwYjRlNWEpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlciA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/test/test-exercise/test-exercise.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/test/test-exercise/test-exercise.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <br />\n        <!--\n              Aqui empieza esa baina rara, el steper para preguntas\n            -->\n\n        <mat-horizontal-stepper linear #stepper>\n          <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n            <form [formGroup]=\"firstFormGroup\">\n              <ng-template matStepLabel>Informacion de la prueba</ng-template>\n              <mat-card>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-md-7\">\n                      <mat-form-field>\n                        <input\n                          matInput\n                          placeholder=\"Nombre de la prueba\"\n                          formControlName=\"nameTestCtrl\"\n                          required\n                        />\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-10\">\n                      <mat-form-field class=\"example-full-width\">\n                        <textarea\n                          matInput\n                          placeholder=\"Descripcion\"\n                          formControlName=\"descriptionTestCtrl\"\n                          rows=\"2\"\n                          required\n                        ></textarea>\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-11\">\n                      <mat-form-field class=\"example-full-width\">\n                        <textarea\n                          matInput\n                          formControlName=\"urlimageCtrl\"\n                          placeholder=\"Cargar imagen\"\n                          rows=\"1\"\n                          required\n                        ></textarea>\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-1\">\n                      <button\n                        mat-raised-button\n                        matTooltip=\"Cargar Imagen\"\n                        [matTooltipPosition]=\"'above'\"\n                        type=\"button\"\n                        class=\"btn btn-default pull-right  btn-just-icon card-button\"\n                      >\n                        <i class=\"material-icons\">\n                          add_box\n                        </i>\n                      </button>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-2\">\n                      <mat-form-field>\n                        <input\n                          type=\"number\"\n                          matInput\n                          placeholder=\"Puntuacion\"\n                          formControlName=\"scoreTestCtrl\"\n                          required\n                        />\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </mat-card>\n\n              <div>\n                <button mat-button matStepperNext class=\"fa-pull-right\">\n                  Siguiente<i class=\"material-icons\">\n                    chevron_right\n                  </i>\n                </button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel\n                >Seleccion de los ejercicios</ng-template\n              >\n\n              <div class=\"\">\n                  <div class=\"row\">\n                    <div class=\"col\" *ngFor=\"let item of testExercise\">\n                      <app-card [item]=\"item\" [type]=\"'test'\"></app-card>\n                    </div>\n                  </div>\n              </div>\n\n\n              <div>\n                <button mat-button matStepperPrevious>Anterior</button>\n                <button mat-button matStepperNext>Siguiente</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Terminar</ng-template>\n            \n            <mat-card>\n              <div class=\"container\">\n                <div class=\"row d-flex justify-content-center\">\n\n                  <div class=\"col-5\" >\n                    <img  \n                        style=\"width: 70%; display: block; margin: auto;\" \n                        src=\"../../../../../assets/img/finish.png\">\n                  </div>\n                  <div class=\"col-10\">\n                      <div class=\"tim-typo\">\n                          <span class=\"tim-note\">Has terminado</span>\n                          <p class=\"text-primary\">\n                            Guarda los datos que has ingresado para crear un test de ejercicios practicos, los cuales podras utilizar en las competencias.\n                          </p>\n                        </div>\n                        <button class=\"btn btn-success\" style=\"display: block; margin: auto;\" > Crear Test</button>\n                  </div>\n                </div>\n              </div>\n            </mat-card>\n\n            <div>\n              <button mat-button matStepperPrevious>Atras</button>\n              <button mat-button (click)=\"stepper.reset()\">Borrar pasos</button>\n            </div>\n          </mat-step>\n        </mat-horizontal-stepper>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/test/test-exercise/test-exercise.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/test/test-exercise/test-exercise.component.ts ***!
  \*********************************************************************/
/*! exports provided: TestExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestExerciseComponent", function() { return TestExerciseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TestExerciseComponent = /** @class */ (function () {
    function TestExerciseComponent(router, _formBuilder) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.id = 1;
        this.themeColor = "";
        this.typeTest = "";
        this.selectType = "";
        this.code = "print(\"Hello World\")";
        this.isEditable = false;
        this.typestest = [
            { value: "0", viewValue: "Preguntas seleccion multiple" },
            { value: "1", viewValue: "Ejercicios practicos" },
            { value: "2", viewValue: "Otros" }
        ];
        this.monacoEditState = {
            color: "accent",
            checked: false,
            disabled: false
        };
        this.EditHtmlState = {
            color: "accent",
            checked: false,
            disabled: false
        };
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.toppingList = [
            "Extra cheese",
            "Mushroom",
            "Onion",
            "Pepperoni",
            "Sausage",
            "Tomato"
        ];
        this.testExercise = [
            {
                name: 'Ejercicio en Python',
                subtitle: 'Grafos',
                description: 'Esta es una descripcion muy detallada del ejercicio o lo que sea.',
                image: '../../../../../assets/img/pythonn.jpg',
                state: true
            },
            {
                name: 'Ejercicio en Nodejs',
                subtitle: 'Completar',
                description: 'Esta es una descripcion muy detallada del ejercicio o lo que sea.',
                image: '../../../../../assets/img/coder2.jpg',
                state: true
            },
            {
                name: 'Ejercicio en Go',
                subtitle: 'Subtitulo',
                description: 'Esta es una descripcion muy detallada del ejercicio o lo que sea..',
                image: '../../../../../assets/img/86_go-programming.png',
                state: true
            },
            {
                name: 'Ciclo en Go',
                subtitle: 'Subtitulo',
                description: 'Esta es una descripcion muy detallada del ejercicio o lo que sea..',
                image: '../../../../../assets/img/coder-cat-2.png',
                state: true
            },
            {
                name: 'Pilas dinamicas',
                subtitle: 'Subtitulo',
                description: 'Esta es una descripcion muy detallada del ejercicio o lo que sea.',
                image: '../../../../../assets/img/coder-cat-2.png',
                state: true
            }
        ];
        //Model of option new
        this.newOption = {
            name: "",
            veracity: false
        };
        //Model of question new
        this.newQuestion = {
            code: null,
            name: "",
            options: [],
        };
        this.countQuestion = 0;
    }
    TestExerciseComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            nameTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descriptionTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            scoreTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            urlimageCtrl: []
        });
        this.secondFormGroup = this._formBuilder.group({
        //  nameQuestionCtrl: ["", Validators.required],
        // optionQuestionCtrl: []
        });
    };
    TestExerciseComponent.prototype.addExersice = function () {
    };
    TestExerciseComponent.prototype.clearQuestion = function () {
    };
    TestExerciseComponent.prototype.setModeCoder = function () {
        this.monacoEditState.checked = this.monacoEditState.checked ? false : true;
    };
    TestExerciseComponent.prototype.setModeEditHTML = function () {
        this.EditHtmlState.checked = this.EditHtmlState.checked ? false : true;
    };
    TestExerciseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-test-exercise",
            template: __webpack_require__(/*! ./test-exercise.component.html */ "./src/app/admin/test/test-exercise/test-exercise.component.html"),
            styles: [__webpack_require__(/*! ./test-exercise.component.css */ "./src/app/admin/test/test-exercise/test-exercise.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TestExerciseComponent);
    return TestExerciseComponent;
}());



/***/ }),

/***/ "./src/app/admin/test/test-list/test-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/test/test-list/test-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\ntable {\n  width: 100%;\n}\n\n.image {\n  width: 60px;\n  display:block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.search{\n  display: block;\n  margin: auto;\n}\n\n.card-header{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n.card-button{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGVzdC90ZXN0LWxpc3QvdGVzdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBSUE7RUFDRSw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSw4RUFBOEU7QUFDaEYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90ZXN0L3Rlc3QtbGlzdC90ZXN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogNjBweDtcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zZWFyY2h7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlYTdhMCwgIzBiNGU1YSkgbm8tcmVwZWF0IDAgMCAvIGNvdmVyIDtcbn1cblxuLmNhcmQtYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZWE3YTAsICMwYjRlNWEpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlciA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/test/test-list/test-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/test/test-list/test-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-default\">\n        <h4 class=\"card-title\">Test de la aplicacion</h4>\n        <p class=\"card-category\">Listado de test</p>\n      </div>\n      <div class=\"card-body\">\n        <mat-card>\n          <form class=\"example-form\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-md-2 pull-right\">\n                  <img class=\"image\" src=\"../../../../../assets/img/coder2.png\">\n                </div>\n                <div class=\"col-md-8 search\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Ingresa el nombre del test...\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-2 search\">\n                  <button class=\"btn btn-default pull-right card-button\">\n                    Buscar\n                  </button>\n                </div>\n\n              </div>\n            </div>\n          </form>\n        </mat-card>\n        <br>\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef>No.</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.position }}\n              </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef>Name</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"weight\">\n              <th mat-header-cell *matHeaderCellDef>Weight</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.weight }}</td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"symbol\">\n              <th mat-header-cell *matHeaderCellDef>Symbol</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.symbol }}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n          </table>\n\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"card-stats\"></div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/test/test-list/test-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/test/test-list/test-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestListComponent", function() { return TestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var TestListComponent = /** @class */ (function () {
    function TestListComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    TestListComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    TestListComponent.prototype.getRoutesItem = function () {
        return ROUTES_TEST;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hiddenNavActve'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestListComponent.prototype, "hiddenNavActve", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TestListComponent.prototype, "paginator", void 0);
    TestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-test-list",
            template: __webpack_require__(/*! ./test-list.component.html */ "./src/app/admin/test/test-list/test-list.component.html"),
            styles: [__webpack_require__(/*! ./test-list.component.css */ "./src/app/admin/test/test-list/test-list.component.css")]
        })
    ], TestListComponent);
    return TestListComponent;
}());

var ROUTES_TEST = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { path: '/admin/tests/menu-test', icon: "school", title: "Menu Test", class: "", active: true },
    { icon: "", title: "Listado de test", class: "", active: false },
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

/***/ "./src/app/admin/test/test-menu/test.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/test/test-menu/test.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\ntable {\n  width: 100%;\n}\n\n.image {\n  width: 70%;\n  display:block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGVzdC90ZXN0LW1lbnUvdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90ZXN0L3Rlc3QtbWVudS90ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/admin/test/test-menu/test.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/test/test-menu/test.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"main-content\">\n    <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n    <div class=\"container-fluid\">\n      <div class=\"row d-flex justify-content-center\">\n  \n        <div *ngFor=\"let item of menuArray\" class=\"col-4\">\n          <app-card-menu [item]=\"item\"></app-card-menu>\n        </div>\n  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/test/test-menu/test.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/test/test-menu/test.component.ts ***!
  \********************************************************/
/*! exports provided: TestMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMenuComponent", function() { return TestMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var TestMenuComponent = /** @class */ (function () {
    function TestMenuComponent() {
        this.selectType = "";
        this.hiddenTestList = false;
        this.hiddenCreateTest = false;
        this.menuArray = [
            {
                name: 'Crear una test de evaluacion',
                subtitle: 'Evaluacion',
                image: '../../../../assets/img/coderninja.png',
                description: '¡Animate! entra aqui y crea un test de preguntas o ejercicios.',
                routeLink: '/admin/tests/create-test'
            },
            {
                name: 'Lista de test de evaluacion',
                subtitle: 'Evaluacion',
                description: ' Entra aqui si quieres ver todos los competencias.',
                image: '../../../../../assets/img/Prog.png',
                routeLink: '/admin/tests/test-list'
            },
            {
                name: 'Estadisticas',
                subtitle: 'Evaluacion',
                description: 'Crea un lenguaje de programacion.',
                image: '../../../../../assets/img/estadistica.png',
                routeLink: ''
            }
        ];
        this.typestest = [
            { value: "0", viewValue: "Preguntas seleccion multiple" },
            { value: "1", viewValue: "Ejercicios practicos" },
            { value: "2", viewValue: "Otros" }
        ];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    TestMenuComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    TestMenuComponent.prototype.setStateTestList = function () {
        this.hiddenTestList = (this.hiddenTestList) ? false : true;
    };
    TestMenuComponent.prototype.setStateCreateTest = function () {
        this.hiddenCreateTest = (this.hiddenCreateTest) ? false : true;
    };
    TestMenuComponent.prototype.getRoutesItem = function () {
        return ROUTES_COMPETENCE;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TestMenuComponent.prototype, "paginator", void 0);
    TestMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-test-menu",
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/admin/test/test-menu/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/admin/test/test-menu/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestMenuComponent);
    return TestMenuComponent;
}());

var ROUTES_COMPETENCE = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { path: '', icon: "school", title: "Menu Test", class: "", active: false },
];
var ELEMENT_DATA = [
    { position: 1, name: 'Nombre de un test', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Nombre de un test', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Nombre de un test', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Nombre de un test', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Nombre de un test', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Nombre de un test', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nombre de un test', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Nombre de un test', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Nombre de un test', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Nombre de un test', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Nombre de un test', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Nombre de un test', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Nombre de un test', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Nombre de un test', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Nombre de un test', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Nombre de un test', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Nombre de un test', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Nombre de un test', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Nombre de un test', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Nombre de un test', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/admin/test/test-question/test-question.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/test/test-question/test-question.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n\n.separador {\n  margin-bottom: 10px;\n  background-color: #FCFDFD;\n}\n\n.card-header{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n.card-button{\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGVzdC90ZXN0LXF1ZXN0aW9uL3Rlc3QtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUlBO0VBQ0UsOEVBQThFO0FBQ2hGOztBQUVBO0VBQ0UsOEVBQThFO0FBQ2hGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdGVzdC90ZXN0LXF1ZXN0aW9uL3Rlc3QtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlcGFyYWRvciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZERkQ7XG59XG5cblxuXG4uY2FyZC1oZWFkZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlYTdhMCwgIzBiNGU1YSkgbm8tcmVwZWF0IDAgMCAvIGNvdmVyIDtcbn1cblxuLmNhcmQtYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZWE3YTAsICMwYjRlNWEpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlciA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/test/test-question/test-question.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/test/test-question/test-question.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <br />\n        <!--\n              Aqui empieza esa baina rara, el steper para preguntas\n            -->\n\n        <mat-horizontal-stepper linear #stepper>\n          <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n            <form [formGroup]=\"firstFormGroup\">\n              <ng-template matStepLabel>Informacion de la prueba</ng-template>\n              <mat-card>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-md-7\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Nombre de la prueba\" formControlName=\"nameTestCtrl\" required />\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-10\">\n                      <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Descripcion\" formControlName=\"descriptionTestCtrl\" rows=\"2\"\n                          required></textarea>\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-11\">\n                      <mat-form-field class=\"example-full-width\">\n                        <textarea matInput formControlName=\"urlimageCtrl\" placeholder=\"Cargar imagen\" rows=\"1\"\n                          required></textarea>\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-1\">\n                      <button mat-raised-button matTooltip=\"Cargar Imagen\" [matTooltipPosition]=\"'above'\" type=\"button\"\n                        class=\"btn btn-default pull-right  btn-just-icon card-button\">\n                        <i class=\"material-icons\">\n                          add_box\n                        </i>\n                      </button>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-2\">\n                      <mat-form-field>\n                        <input type=\"number\" matInput placeholder=\"Puntuacion\" formControlName=\"scoreTestCtrl\"\n                          required />\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </mat-card>\n\n              <div>\n                <button mat-button matStepperNext class=\"fa-pull-right\">\n                  Siguiente<i class=\"material-icons\">\n                    chevron_right\n                  </i>\n                </button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel>Creacion de preguntas</ng-template>\n\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"card\">\n                    <div class=\"card-header card-header-default card-button\">\n                      <h4 class=\"card-title\">\n                        Crea una pregunta\n                      </h4>\n                      <p class=\"card-category\">\n                        Aqui puedes crear preguntas de seleccion multiple, ten\n                        en cuenta que puedes anexar codigo de programacion a\n                        tu pregunta.\n                      </p>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"container\">\n                        <div class=\"row\">\n                          <div class=\"col-md-10\">\n                            <mat-form-field class=\"example-full-width\">\n                              <input [(ngModel)]=\"newQuestion.name\" matInput placeholder=\"Escribe aqui tu pregunta\"\n                                formControlName=\"nameQuestionCtrl\" required />\n                            </mat-form-field>\n                          </div>\n                        </div>\n\n                        <div class=\"row\">\n                          <div class=\"col-md-8\">\n                            <mat-form-field>\n                              <input [(ngModel)]=\"newOption.name\" matInput\n                                placeholder=\"Escribe aqui una de las opciones\" formControlName=\"optionQuestionCtrl\"\n                                required />\n                            </mat-form-field>\n                          </div>\n                          <div class=\"col-md-2\">\n                            <button (click)=\"addOptionList()\" mat-raised-button type=\"button\" matTooltip=\"Agregar nuevo\"\n                              [matTooltipPosition]=\"'above'\" class=\"btn btn-default  card-button btn-link btn-lg btn-just-icon \">\n                              <i class=\"material-icons\">add_box</i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n\n                      <mat-card *ngIf=\"newQuestion.options.length != 0\">\n                        <div class=\"col-md-12\">\n                          <div class=\"container d-flex justify-content-center\">\n                            <mat-card>\n                              <div class=\"col-md-12\" *ngFor=\"let option of newQuestion.options\">\n                                <mat-checkbox>\n                                  {{ option.name }}\n                                </mat-checkbox>\n                              </div>\n                            </mat-card>\n                          </div>\n                        </div>\n                      </mat-card>\n                      <br />\n                      <div class=\"container\">\n                        <div class=\"row\">\n                          <mat-slide-toggle (click)=\"setModeCoder()\" class=\"example-margin\"\n                            [color]=\"monacoEditState.color\" [checked]=\"monacoEditState.checked\"\n                            [disabled]=\"monacoEditState.disabled\">\n                            <label for=\"\" [hidden]=\"monacoEditState.checked\">¿Quieres ingresar codigo de\n                              programacion?</label>\n                            <label for=\"\" [hidden]=\"!monacoEditState.checked\">¿Quieres deshabilitar el modo\n                              programador?</label>\n                          </mat-slide-toggle>\n                        </div>\n                      </div>\n\n                      <br />\n                      <mat-card [hidden]=\"!monacoEditState.checked\">\n                        <app-monaco-code></app-monaco-code>\n                      </mat-card>\n                      <br />\n\n                      <button (click)=\"addQuestion()\" mat-raised-button type=\"submit\"\n                        class=\"btn btn-default pull-right card-button\">\n                        Agregar\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <hr />\n\n              <mat-accordion>\n                <mat-expansion-panel *ngFor=\"let question of questionList\">\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      {{ question.name }}\n                    </mat-panel-title>\n                    <mat-panel-description>\n\n\n\n                      <!--   <button\n                              (click)=\"removeQuestion(question.id)\"\n                              mat-raised-button\n                              type=\"button\"\n                              matTooltip=\"Eliminar\"\n                              [matTooltipPosition]=\"'above'\"\n                              class=\"btn  pull-right btn-link btn-sm btn-just-icon \"\n                            >\n                              <i class=\"material-icons\">delete_forever</i>\n                            </button> -->\n\n\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n\n\n                  <div class=\"container\">\n                    <div class=\"row\" *ngFor=\"let op of question.options; let i = index\" [hidden]=\"question.state\">\n                      <div class=\"col-md-10\">\n                        <mat-form-field>\n                          <div class=\"row\">\n                            <div class=\"col-1\">\n                              {{i + 1}}.\n                            </div>\n                            <div class=\"col-9\">\n                              <input matInput placeholder=\"\" type=\"text\" [value]=\"op.name\" />\n                            </div>\n                            <div class=\"col-2\">\n                              <mat-checkbox [value]=\"op.state\"></mat-checkbox>\n                            </div>\n                          </div>\n\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n\n                </mat-expansion-panel>\n              </mat-accordion>\n\n\n\n              <br />\n\n              <div>\n                <button mat-button matStepperPrevious>Anterior</button>\n                <button mat-button matStepperNext>Siguiente</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Terminar</ng-template>\n            You are now done.\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n          </mat-step>\n        </mat-horizontal-stepper>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <label *ngIf=\"selectType == '1'\">\n          Construye el contenido personalizado del ejercicio practico\n        </label>\n      </div>\n\n      <div class=\"col-md-2\">\n        <!-- Aqui cambiamos el estado del editor de texto html-->\n        <mat-slide-toggle *ngIf=\"selectType == '1'\" (click)=\"setModeEditHTML()\" class=\"example-margin\"\n          [color]=\"EditHtmlState.color\" [checked]=\"EditHtmlState.checked\" [disabled]=\"EditHtmlState.disabled\">\n          Ver edicion\n        </mat-slide-toggle>\n      </div>\n    </div>\n    <ngx-editor *ngIf=\"selectType == '1'\" [hidden]=\"EditHtmlState.checked\">\n    </ngx-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/test/test-question/test-question.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/test/test-question/test-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: TestQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestQuestionComponent", function() { return TestQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TestQuestionComponent = /** @class */ (function () {
    function TestQuestionComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.panelOpenState = false;
        this.id = 1;
        this.themeColor = "";
        this.typeTest = "";
        this.selectType = "";
        this.code = "print(\"Hello World\")";
        this.isEditable = false;
        this.typestest = [
            { value: "0", viewValue: "Preguntas seleccion multiple" },
            { value: "1", viewValue: "Ejercicios practicos" },
            { value: "2", viewValue: "Otros" }
        ];
        this.monacoEditState = {
            color: "accent",
            checked: false,
            disabled: false
        };
        this.EditHtmlState = {
            color: "accent",
            checked: false,
            disabled: false
        };
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppingList = [
            "Extra cheese",
            "Mushroom",
            "Onion",
            "Pepperoni",
            "Sausage",
            "Tomato"
        ];
        this.questionList = [];
        //Model of option new
        this.newOption = {
            name: "",
            veracity: false
        };
        //Model of question new
        this.newQuestion = {
            code: null,
            name: "",
            options: []
        };
        this.countQuestion = 0;
    }
    TestQuestionComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            urlimageCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nameTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descriptionTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            scoreTestCtrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            nameQuestionCtrl: [],
            optionQuestionCtrl: []
        });
    };
    TestQuestionComponent.prototype.addQuestion = function () {
        /*   let temp: IQuestion = {
            id: this.getNextId(),
            name: this.newQuestion.name,
            code: this.newQuestion.code,
            option: this.newQuestion.option,
            score: this.newQuestion.score,
            state: false
          }; */
        /*  console.log(temp);
         this.questionList.push(temp);
         this.newQuestion.name = "";
         this.clearOption();
         this.clearQuestion();
         console.log(this.questionList);
         console.log("¡ID!");
         console.log(this.countQuestion);
         console.log("ID QUESTION NEW");
         console.log(temp.id) */
    };
    TestQuestionComponent.prototype.addOptionList = function () {
        /*  let temp: IOption = {
           id: this.newOption.id,
           name: this.newOption.name,
           veracity: this.newOption.veracity
         };
     
         console.log("-->", temp.name.length);
         if (temp.name.length === 0 || temp.name.length > 50) {
           console.log("Pailas, la opcion es muy larga");
         } else {
           console.log(temp);
           this.newQuestion.option.push(temp);
           this.newOption.name = "";
           console.log(this.newQuestion.option);
         } */
    };
    TestQuestionComponent.prototype.clearQuestion = function () {
        /*  this.newQuestion = {
           id: null,
           code: null,
           name: "",
           option: [],
           score: 0,
           state: true
         }; */
    };
    TestQuestionComponent.prototype.clearOption = function () {
        /*  this.newOption = {
           id: null,
           name: "",
           veracity: false
         }; */
    };
    TestQuestionComponent.prototype.setStateQuestion = function (id) {
        /*     _.forEach(this.questionList, function(value: Question) {
              if (value.id == id) {
                console.log("Encontrado", value);
                if (value.state === true) {
                  value.state = false;
                } else {
                  console.log("no encontrado");
                  value.state = true;
                }
              }
            }); */
    };
    TestQuestionComponent.prototype.removeQuestion = function (id) {
        /*     console.log(id);
            _.remove(this.questionList, question => {
              return (question.id === id);
            });
            console.log("LISTAAAAAAAAAA --");
            console.log(this.questionList) */
    };
    TestQuestionComponent.prototype.setModeCoder = function () {
        this.monacoEditState.checked = this.monacoEditState.checked ? false : true;
    };
    TestQuestionComponent.prototype.setModeEditHTML = function () {
        this.EditHtmlState.checked = this.EditHtmlState.checked ? false : true;
    };
    TestQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-test-question",
            template: __webpack_require__(/*! ./test-question.component.html */ "./src/app/admin/test/test-question/test-question.component.html"),
            styles: [__webpack_require__(/*! ./test-question.component.css */ "./src/app/admin/test/test-question/test-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TestQuestionComponent);
    return TestQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/test/test-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/test/test-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_menu_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-menu/test.component */ "./src/app/admin/test/test-menu/test.component.ts");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.component */ "./src/app/admin/test/test.component.ts");
/* harmony import */ var _test_list_test_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-list/test-list.component */ "./src/app/admin/test/test-list/test-list.component.ts");
/* harmony import */ var _test_exercise_test_exercise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-exercise/test-exercise.component */ "./src/app/admin/test/test-exercise/test-exercise.component.ts");
/* harmony import */ var _test_question_test_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-question/test-question.component */ "./src/app/admin/test/test-question/test-question.component.ts");
/* harmony import */ var _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-test/create-test.component */ "./src/app/admin/test/create-test/create-test.component.ts");









var routes = [{
        path: '',
        component: _test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"],
        children: [
            { path: 'menu-test', component: _test_menu_test_component__WEBPACK_IMPORTED_MODULE_3__["TestMenuComponent"] },
            { path: 'create-test', component: _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_8__["CreateTestComponent"] },
            { path: 'test-list', component: _test_list_test_list_component__WEBPACK_IMPORTED_MODULE_5__["TestListComponent"] },
        ],
    }];
var TestRoutingModule = /** @class */ (function () {
    function TestRoutingModule() {
    }
    TestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TestRoutingModule);
    return TestRoutingModule;
}());

var routedComponents = [
    _test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"],
    _test_menu_test_component__WEBPACK_IMPORTED_MODULE_3__["TestMenuComponent"],
    _test_exercise_test_exercise_component__WEBPACK_IMPORTED_MODULE_6__["TestExerciseComponent"],
    _test_question_test_question_component__WEBPACK_IMPORTED_MODULE_7__["TestQuestionComponent"],
    _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_8__["CreateTestComponent"],
    _test_list_test_list_component__WEBPACK_IMPORTED_MODULE_5__["TestListComponent"]
];


/***/ }),

/***/ "./src/app/admin/test/test.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-test',
            template: "\n    <router-outlet> </router-outlet>\n  ",
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/admin/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/admin/test/test-routing.module.ts");
/* harmony import */ var src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@theme/components/components.module */ "./src/app/@theme/components/components.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__);





var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestRoutingModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
            ],
            declarations: _test_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], TestModule);
    return TestModule;
}());



/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map