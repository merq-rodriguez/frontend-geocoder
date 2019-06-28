(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exercise-exercise-module"],{

/***/ "./src/app/admin/exercise/create-exercise/create-exercise.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/exercise/create-exercise/create-exercise.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-slider {\n  width: 100%;\n}\n\n\n.card-blue{\n    background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n  }\n\n\n.button-blue{\n    background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n\n.info{\n    background: rgba(239, 241, 241, 0.623);\n\n  }\n\n\n.image-step1{\n    display: block;\n    width: 60px;\n    margin: auto;\n  }\n\n\n.image-upload{\n  border-style: dotted ;\n  border-width: 4px;\n  border-color: rgb(211, 211, 210);\n  width: 30%;\n  display:block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n\n.add-file-button {\n  background: linear-gradient(to right, #1ea7a0, #0b4e5a) no-repeat 0 0 / cover ;\n  position: absolute;\n  bottom: -28px;\n  left: 16px;\n  margin-bottom: 30px; \n}\n\n\n.center{\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZXhlcmNpc2UvY3JlYXRlLWV4ZXJjaXNlL2NyZWF0ZS1leGVyY2lzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtJQUNJLDhFQUE4RTtFQUNoRjs7O0FBQ0Y7SUFDSSw4RUFBOEU7SUFDOUUsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7OztBQUVBO0lBQ0Usc0NBQXNDOztFQUV4Qzs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7RUFDZDs7O0FBR0Y7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsOEVBQThFO0VBQzlFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2V4ZXJjaXNlL2NyZWF0ZS1leGVyY2lzZS9jcmVhdGUtZXhlcmNpc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uY2FyZC1ibHVle1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlYTdhMCwgIzBiNGU1YSkgbm8tcmVwZWF0IDAgMCAvIGNvdmVyIDtcbiAgfVxuLmJ1dHRvbi1ibHVle1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlYTdhMCwgIzBiNGU1YSkgbm8tcmVwZWF0IDAgMCAvIGNvdmVyIDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAuaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgMjQxLCAyNDEsIDAuNjIzKTtcblxuICB9XG5cbiAgLmltYWdlLXN0ZXAxe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIFxuLmltYWdlLXVwbG9hZHtcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQgO1xuICBib3JkZXItd2lkdGg6IDRweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMCk7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5hZGQtZmlsZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZWE3YTAsICMwYjRlNWEpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlciA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjhweDtcbiAgbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG59XG5cbi5jZW50ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/exercise/create-exercise/create-exercise.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/exercise/create-exercise/create-exercise.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content ml-5\">\n  <div class=\"container-fluid\">\n    <app-navroutes [itemsRoutes]=\"getRoutesItem()\"></app-navroutes>\n\n\n    <div class=\"row\">\n\n\n\n      <div class=\"card\">\n        <div class=\"card-header card-header-default card-blue\">\n          <h4 class=\"card-title\">Ejercicios de programacion</h4>\n          <p class=\"card-category\">\n            En esta seccion debe crear los ejercicios de programacion.\n          </p>\n        </div>\n        <div class=\"card-body\">\n\n          <mat-card class=\"info\">\n            <div class=\"row\">\n              <div class=\"col-md-2 text-center \">\n                <img class=\"image-step1\" src=\"../../../../../assets/img/deadpool.png\" />\n              </div>\n              <div class=\"col-md-2 text-center \">\n                <img class=\"image-step1\" src=\"../../../../../assets/img/icon_programador.png\" />\n              </div>\n              <div class=\"col-md-2 text-center \">\n                <img class=\"image-step1\" src=\"../../../../../assets/img/termi.jpg\" />\n              </div>\n              <div class=\"col-md-2 text-center \">\n                <img class=\"image-step1\" src=\"../../../../../assets/img/mundo.png\" />\n              </div>\n              <div class=\"col-md-2 text-center \">\n                <img class=\"image-step1\" src=\"../../../../../assets/img/main.png\" />\n              </div>\n              <div class=\"col-md-2 text-center \">\n                <img class=\"image-step1\" src=\"../../../../../assets/img/deadpool2.png\" />\n              </div>\n\n\n            </div>\n          </mat-card>\n          <br>\n          <br>\n\n\n\n\n          <!--  <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n            {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n          </button> -->\n          <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n            <mat-step [stepControl]=\"firstFormGroup\">\n              <form [formGroup]=\"firstFormGroup\">\n                <ng-template matStepLabel>Datos basicos</ng-template>\n\n\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Nombre del ejercicio\" [(ngModel)]=\"exercise.name\" name=\"name\"\n                          formControlName=\"nameCtrl\" />\n                      </mat-form-field>\n\n                      <mat-form-field>\n                        <textarea matInput placeholder=\"Descripcion\" [(ngModel)]=\"exercise.description\"\n                          name=\"description\" formControlName=\"descriptionCtrl\"></textarea>\n                      </mat-form-field>\n\n                    </div>\n                  </div>\n                </div>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <form>\n                        <mat-form-field>\n                          <mat-label>Selecciona el lenguaje de programacion</mat-label>\n                          <mat-select [(ngModel)]=\"selectedLanguage\" name=\"language\">\n                            <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.id\">\n                              {{lang.name}}\n                            </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n  \n                      </form>\n                    </div>\n\n                  </div>\n                </div>\n\n                <image-preview (onChange)=\"getFile($event)\"></image-preview>\n\n            \n              </form>\n            </mat-step>\n\n\n            <mat-step [stepControl]=\"secondFormGroup\">\n              <form [formGroup]=\"secondFormGroup\">\n                <ng-template matStepLabel>Planteamiento</ng-template>\n\n\n\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <ngx-editor></ngx-editor>\n                    </div>\n                  </div>\n                </div>\n\n              \n              </form>\n            </mat-step>\n\n\n\n            <mat-step [stepControl]=\"threeFormGroup\">\n              <form [formGroup]=\"threeFormGroup\">\n                <ng-template matStepLabel>Solucion algoritmica</ng-template>\n\n\n\n\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <app-monaco-code [context]=\"'no se que poner aqui XD'\"></app-monaco-code>\n                    </div>\n                  </div>\n                </div>\n                <hr>\n\n                <div class=\"container\">\n                  <div class=\"row \">\n                    <div class=\"col-4\">\n                      <mat-form-field>\n                        <textarea matInput placeholder=\"Estradas del ejercicio\" [(ngModel)]=\"exercise.input\"\n                          formControlName=\"inputCtrl\" name=\"input\" rows=\"6\"></textarea>\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-4\">\n                      <button class=\"btn btn-success center\" (click)=\"submissionCode()\">ENVIAR</button>\n                      <button class=\"btn btn-success center\" (click)=\"getDetailSubmission()\">VER STATUS</button>\n                    </div>\n                    <div class=\"col-4\">\n                      <mat-form-field>\n                        <textarea matInput placeholder=\"Salidas del ejercicio\" [(ngModel)]=\"exercise.output\"\n                          formControlName=\"outputCtrl\" name=\"output\" rows=\"6\"></textarea>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n\n\n              </form>\n            </mat-step>\n\n\n            <mat-step [stepControl]=\"fourFormGroup\">\n              <form [formGroup]=\"fourFormGroup\">\n                <ng-template matStepLabel>Ubicacion geografica</ng-template>\n\n\n                <br />\n                <mat-card>\n                  <div class=\"col\">\n                    <div class=\"row\">\n                      <div class=\"col-md-4\">\n                        <mat-form-field>\n                          <input matInput placeholder=\"Latitud\" type=\"number\" [(ngModel)]=\"exercise.location.latitude\"\n                            formControlName=\"latitudeCtrl\" />\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"col-md-4\">\n                        <mat-form-field>\n                          <input matInput placeholder=\"Longitud\" type=\"number\" formControlName=\"longitudeCtrl\"\n                            [(ngModel)]=\"exercise.location.longitude\" />\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"col-md-4\">\n                        <mat-form-field>\n                          <input type=\"number\" matInput placeholder=\"Radio\" formControlName=\"radiusCtrl\"\n                            [(ngModel)]=\"exercise.radius\" />\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </mat-card>\n                <br />\n\n                <br />\n                <app-map (coordinateChange)=\"getCoordinate($event)\"></app-map>\n                <br />\n\n                <!--       <mat-card class=\"\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <mat-slider thumbLabel matTooltip=\"Desliza para generar un radio de competencia\"\n                              [displayWith]=\"formatLabel\" tickInterval=\"100\" min=\"1\" max=\"10000\"></mat-slider>\n                          </div>\n     \n                          \n                        </div>\n                      </mat-card> -->\n\n\n              </form>\n            </mat-step>\n            <mat-step>\n              <ng-template matStepLabel>Terminar</ng-template>\n\n\n\n              <button mat-raised-button type=\"submit\" class=\"btn btn-default pull-right button-blue\"\n                (click)=\"addExercise()\">Guardar</button>\n\n\n            </mat-step>\n          </mat-vertical-stepper>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          <hr>\n\n\n\n\n\n          <div class=\"container\">\n            <div class=\"row d-flex justify-content-center\">\n              <div *ngFor=\"let item of exerciseList\">\n                <app-card (action)=\"getAction($event)\" [item]=\"item\" [type]=\"'exercise'\"></app-card>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/exercise/create-exercise/create-exercise.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/exercise/create-exercise/create-exercise.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExerciseComponent", function() { return CreateExerciseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_judge0_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../@core/services/judge0.service */ "./src/app/@core/services/judge0.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_theme_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@theme/animations */ "./src/app/@theme/animations/index.ts");
/* harmony import */ var src_app_core_services_monaco_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@core/services/monaco.service */ "./src/app/@core/services/monaco.service.ts");
/* harmony import */ var src_app_core_services_content_editor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@core/services/content-editor.service */ "./src/app/@core/services/content-editor.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/@core/services/snackbar.service */ "./src/app/@core/services/snackbar.service.ts");
/* harmony import */ var src_app_core_services_exercise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/@core/services/exercise.service */ "./src/app/@core/services/exercise.service.ts");
/* harmony import */ var _modal_info_info_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modal/info/info-dialog.component */ "./src/app/admin/modal/info/info-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/@core/services/auth.service */ "./src/app/@core/services/auth.service.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages */ "./src/app/admin/exercise/create-exercise/messages.ts");















var CreateExerciseComponent = /** @class */ (function () {
    function CreateExerciseComponent(_formBuilder, snackService, exerciseService, monacoService, editorService, authService, dialog, judgle0Service) {
        this._formBuilder = _formBuilder;
        this.snackService = snackService;
        this.exerciseService = exerciseService;
        this.monacoService = monacoService;
        this.editorService = editorService;
        this.authService = authService;
        this.dialog = dialog;
        this.judgle0Service = judgle0Service;
        this.languages = [];
        this.exerciseList = [];
        this.isLinear = false;
        this.exercise = {
            contentEditor: '',
            contentCode: '',
            description: '',
            idExercise: null,
            idUser: null,
            name: '',
            input: '',
            output: '',
            image: null,
            location: {
                latitude: 0,
                longitude: 0
            },
            radius: 0
        };
    }
    CreateExerciseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionToken();
        this.getAllLanguages();
        this.authService.userObservable$.subscribe(function (user) { return _this.user = user; });
        this.getAllExercises(this.user.idUser);
        this.subscribeMonaco$ = this.monacoService.content$.subscribe(function (content) { return _this.exercise.contentCode = content; });
        this.subscribeEditorHTML$ = this.editorService.content$.subscribe(function (content) { return _this.exercise.contentEditor = content; });
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            descriptionCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({});
        this.threeFormGroup = this._formBuilder.group({
            inputCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            outputCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
        });
        this.fourFormGroup = this._formBuilder.group({
            latitudeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            longitudeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            radiusCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
        });
    };
    CreateExerciseComponent.prototype.subscriptionToken = function () {
        var _this = this;
        this.judgle0Service.token$.subscribe(function (token) { return _this.token = token; });
    };
    CreateExerciseComponent.prototype.getCoordinate = function (e) {
        console.log(e);
        this.exercise.location.latitude = e.lat;
        this.exercise.location.longitude = e.lng;
    };
    // Da formato de texto a la barra de radio 
    CreateExerciseComponent.prototype.formatLabel = function (value) {
        // this.exercise.radius = 0;
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + "k";
        }
        return value;
    };
    CreateExerciseComponent.prototype.openDialog = function (data) {
        this.submissionCode();
        var dialogRef = this.dialog.open(_modal_info_info_dialog_component__WEBPACK_IMPORTED_MODULE_11__["InfoDialogComponent"], {
            width: '250px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    CreateExerciseComponent.prototype.clearExercise = function () {
        this.exercise = {
            idExercise: '',
            description: '',
            name: '',
            input: '',
            output: '',
            image: null,
            location: {
                latitude: 0,
                longitude: 0
            },
            radius: 0
        };
        this.monacoService.reset();
        this.editorService.reset();
        console.log("Ejercicio limpiado");
        console.log(this.exercise);
    };
    CreateExerciseComponent.prototype.getAllLanguages = function () {
        var _this = this;
        this.judgle0Service.getLanguages().subscribe(function (res) {
            console.log("RESPONSE LANGUAGES JUDGE");
            console.log(res);
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var lang = res_1[_i];
                _this.languages.push(lang);
            }
        });
    };
    CreateExerciseComponent.prototype.getFile = function (file) {
        this.exercise.image = file;
    };
    CreateExerciseComponent.prototype.submissionCode = function () {
        var _this = this;
        console.log(this.exercise.contentCode);
        if (this.selectedLanguage) {
            if (this.exercise.contentCode.trim() !== '') {
                this.judgle0Service.submission({
                    source_code: this.exercise.contentCode,
                    language_id: this.selectedLanguage,
                    expected_output: this.exercise.output
                }).subscribe(function (res) {
                    // console.log(res)
                    if (!res.token) {
                        _this.openDialog(_messages__WEBPACK_IMPORTED_MODULE_14__["warning"]);
                    }
                    else {
                        _this.judgle0Service.setToken(res.token);
                        _this.subscriptionToken();
                        console.log("Ya hay token: ");
                        console.log(_this.token);
                        _this.sleep(2000);
                        _this.getDetailSubmission();
                    }
                });
            }
            else {
                this.snackService.openSnackBar("No has ingresado codigo de programacion", "Aceptar");
            }
        }
        else {
            this.snackService.openSnackBar("No has seleccionado un lenguage", "Aceptar");
        }
    };
    CreateExerciseComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    CreateExerciseComponent.prototype.getDetailSubmission = function () {
        var _this = this;
        this.judgle0Service.detailSubmission(this.token).subscribe(function (res) {
            console.log("--------STATUS----------");
            var status = res.status;
            console.log(status);
            if (!status) {
                _this.openDialog(_messages__WEBPACK_IMPORTED_MODULE_14__["waiting"]);
            }
            else {
                switch (status.id) {
                    case 1:
                        console.info("Esperando ...");
                        //this.openDialog(waiting);
                        break;
                    case 2:
                        console.info("Procesando ...");
                        //this.openDialog(processing);
                        break;
                    case 3:
                        _this.openDialog(_messages__WEBPACK_IMPORTED_MODULE_14__["accepted"]);
                        break;
                    case 4:
                        _this.openDialog(_messages__WEBPACK_IMPORTED_MODULE_14__["failed"]);
                        break;
                    case 13:
                        _this.openDialog(_messages__WEBPACK_IMPORTED_MODULE_14__["internalError"]);
                        break;
                    default:
                        _this.openDialog(_messages__WEBPACK_IMPORTED_MODULE_14__["failed"]);
                }
            }
            _this.judgle0Service.unsubscribe();
        });
    };
    CreateExerciseComponent.prototype.createExercise = function (exercise) {
        var _this = this;
        console.log(exercise);
        this.exerciseService.createExercise(exercise).subscribe(function (res) {
            console.log("Response add exercise");
            console.log(res);
            if (res['result']) {
                exercise.idExercise = res['result'].idExercise;
                exercise.idCode = res['result'].idCode;
                exercise.imageSrc = res['result'].image;
                _this.exerciseList.push(exercise);
                _this.clearExercise();
                _this.snackService.openSnackBar('¡Has agregado un nuevo ejercicio!', 'Aceptar');
                console.log(_this.exerciseList);
            }
            else {
                _this.snackService.openSnackBar('¡Ocurrio un problema al guardar el ejercicio!', 'Aceptar');
            }
        });
    };
    CreateExerciseComponent.prototype.getAllExercises = function (idUser) {
        var _this = this;
        console.log("idUser: " + idUser);
        this.exerciseService.getExercises(idUser).subscribe(function (exersices) {
            for (var _i = 0, exersices_1 = exersices; _i < exersices_1.length; _i++) {
                var exer = exersices_1[_i];
                console.log(exer);
                _this.exerciseList.push({
                    idExercise: exer.idexercise,
                    name: exer.name,
                    description: exer.description,
                    input: exer.input,
                    output: exer.output,
                    idUser: exer.fkuser,
                    imageSrc: exer.image
                });
            }
        });
    };
    CreateExerciseComponent.prototype.addExercise = function () {
        var validate = false;
        if (this.exercise.contentEditor) {
            if (this.exercise.contentEditor.trim() === '' ||
                this.exercise.name === '' ||
                this.exercise.description === '',
                this.exercise.output === '') {
                validate = false;
            }
            else {
                validate = true;
            }
        }
        else {
            validate = false;
        }
        console.log(this.exercise);
        if (!validate) {
            this.snackService.openSnackBar('Hay campos obligatorios sin completar *', 'De acuerdo');
        }
        else {
            var exer = {
                idExercise: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
                name: this.exercise.name,
                description: this.exercise.description,
                contentCode: this.exercise.contentCode,
                contentEditor: this.exercise.contentEditor,
                idUser: this.user.idUser,
                input: this.exercise.input,
                output: this.exercise.output,
                image: this.exercise.image,
                location: {
                    latitude: this.exercise.location.latitude,
                    longitude: this.exercise.location.longitude
                },
                radius: this.exercise.radius
            };
            this.createExercise(exer);
        }
    };
    CreateExerciseComponent.prototype.deleteExercise = function (idExercise) {
        var _this = this;
        this.exerciseService.deleteExercise(idExercise).subscribe(function (res) {
            console.log(res);
            if (res.status) {
                if (res.status === 'OK') {
                    lodash__WEBPACK_IMPORTED_MODULE_7__["remove"](_this.exerciseList, function (ex) { return Number(ex.idExercise) === idExercise; }); //Eliminamos el ejercicio
                    _this.snackService.openSnackBar("Has eliminado un ejercicio", "Aceptar");
                    console.log(_this.exerciseList);
                }
            }
        });
    };
    CreateExerciseComponent.prototype.getAction = function (e) {
        var exerci = e.item;
        console.log(exerci);
        switch (e.action) {
            case 'delete':
                this.deleteExercise(Number(exerci.idExercise));
                break;
            case 'update':
                console.log("Actualizando ejercicio... equisde equisde");
                break;
        }
    };
    CreateExerciseComponent.prototype.getRoutesItem = function () {
        return ROUTES_COMPETENCE;
    };
    CreateExerciseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "create-exercise",
            template: __webpack_require__(/*! ./create-exercise.component.html */ "./src/app/admin/exercise/create-exercise/create-exercise.component.html"),
            animations: src_app_theme_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./create-exercise.component.css */ "./src/app/admin/exercise/create-exercise/create-exercise.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
            src_app_core_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"],
            src_app_core_services_exercise_service__WEBPACK_IMPORTED_MODULE_10__["ExerciseService"],
            src_app_core_services_monaco_service__WEBPACK_IMPORTED_MODULE_5__["MonacoService"],
            src_app_core_services_content_editor_service__WEBPACK_IMPORTED_MODULE_6__["ContentEditorService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _core_services_judge0_service__WEBPACK_IMPORTED_MODULE_1__["Judge0Service"]])
    ], CreateExerciseComponent);
    return CreateExerciseComponent;
}());

var ROUTES_COMPETENCE = [
    { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
    { path: '', icon: "school", title: "Ejercicios", class: "", active: false },
];


/***/ }),

/***/ "./src/app/admin/exercise/create-exercise/messages.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/exercise/create-exercise/messages.ts ***!
  \************************************************************/
/*! exports provided: warning, waiting, processing, accepted, failed, internalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waiting", function() { return waiting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processing", function() { return processing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accepted", function() { return accepted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failed", function() { return failed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalError", function() { return internalError; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

var warning = {
    id: 0,
    title: '¡El servidor no responde!',
    message: '',
    image: "" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.geoprogram + 'uploads/images/warning.png')
};
var waiting = {
    id: 1,
    title: '¡Esperando respuesta!',
    message: '',
    image: "" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.geoprogram + 'uploads/images/waiting.png')
};
var processing = {
    id: 2,
    title: '¡Procesando respuesta!',
    message: '',
    image: "" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.geoprogram + 'uploads/images/waiting.png')
};
var accepted = {
    id: 3,
    title: '¡Compilacion exitosa!',
    message: '',
    image: "" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.geoprogram + 'uploads/images/fine.jpg')
};
var failed = {
    id: 4,
    title: '¡Respuesta incorrecta!',
    message: '',
    image: "" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.geoprogram + 'uploads/images/bad.png')
};
var internalError = {
    id: 13,
    title: '¡Error interno en el servidor!',
    message: '',
    image: "" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.geoprogram + 'uploads/images/bad.png')
};


/***/ }),

/***/ "./src/app/admin/exercise/exercise-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/exercise/exercise-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ExerciseRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRoutingModule", function() { return ExerciseRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exercise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise.component */ "./src/app/admin/exercise/exercise.component.ts");
/* harmony import */ var _create_exercise_create_exercise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-exercise/create-exercise.component */ "./src/app/admin/exercise/create-exercise/create-exercise.component.ts");





var routes = [{
        path: '',
        component: _exercise_component__WEBPACK_IMPORTED_MODULE_3__["ExerciseComponent"],
        children: [
            { path: 'create-exercise', component: _create_exercise_create_exercise_component__WEBPACK_IMPORTED_MODULE_4__["CreateExerciseComponent"] },
        ],
    }];
var ExerciseRoutingModule = /** @class */ (function () {
    function ExerciseRoutingModule() {
    }
    ExerciseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExerciseRoutingModule);
    return ExerciseRoutingModule;
}());

var routedComponents = [
    _exercise_component__WEBPACK_IMPORTED_MODULE_3__["ExerciseComponent"],
    _create_exercise_create_exercise_component__WEBPACK_IMPORTED_MODULE_4__["CreateExerciseComponent"]
];


/***/ }),

/***/ "./src/app/admin/exercise/exercise.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/exercise/exercise.component.ts ***!
  \******************************************************/
/*! exports provided: ExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseComponent", function() { return ExerciseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExerciseComponent = /** @class */ (function () {
    function ExerciseComponent() {
    }
    ExerciseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-exercises',
            template: " <router-outlet> </router-outlet>",
        })
    ], ExerciseComponent);
    return ExerciseComponent;
}());



/***/ }),

/***/ "./src/app/admin/exercise/exercise.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/exercise/exercise.module.ts ***!
  \***************************************************/
/*! exports provided: ExerciseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseModule", function() { return ExerciseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exercise_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-routing.module */ "./src/app/admin/exercise/exercise-routing.module.ts");
/* harmony import */ var src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@theme/components/components.module */ "./src/app/@theme/components/components.module.ts");




var ExerciseModule = /** @class */ (function () {
    function ExerciseModule() {
    }
    ExerciseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_theme_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _exercise_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExerciseRoutingModule"]
            ],
            declarations: _exercise_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], ExerciseModule);
    return ExerciseModule;
}());



/***/ })

}]);
//# sourceMappingURL=exercise-exercise-module.js.map