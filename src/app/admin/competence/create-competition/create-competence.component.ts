import { Component, OnInit } from "@angular/core";
import {
  icon,
  latLng,
  marker,
  polyline,
  tileLayer,
  point,
  Map,
  circle,
  polygon
} from "leaflet";
import { usermarkerList } from "./markers";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { IQuestion } from 'src/app/@core/data/question.data';
import { Coordinate } from 'src/app/@theme/components/map/map.component';
import { fuseAnimations } from 'src/app/@theme/animations';

/* export interface TypeCompetence {
  name: string;
  message: string;
} */

export interface TypeTest {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-create-competence",
  templateUrl: "./create-competence.component.html",
  styleUrls: ["./create-competence.component.css"],

})
export class CreateCompetenceComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  listCoordinates: [] = []
  testQuestions  = []
  testExercise = []

  hiddenTimeEnd = false;
  isLinear = false;
  valueSlider: number = 0;
   selectType = "";

  //Fechas datepicker
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  newCoordinate: Coordinate = {
    lat: 0,
    lng: 0,
    radius: 0
  };

  typestest: TypeTest[] = [
    { value: "0", viewValue: "Preguntas seleccion multiple" },
    { value: "1", viewValue: "Ejercicios practicos" },
    { value: "2", viewValue: "Otros" }
  ];

  
  // Da formato de texto a la barra de radio 
  formatLabel(value: number | null) {
    if (!value) {return 0}
    if (value >= 1000) {return Math.round(value / 1000) + "k"}
    return value;
  }

  constructor(private _formBuilder: FormBuilder) {}

  
  getCoordinate(e : Coordinate){
    console.log(e);
    this.newCoordinate.lat = e.lat;
    this.newCoordinate.lng = e.lng;
  }

  //Obtener Archivo imagen
  getFile(file: File){
    console.log(file)
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      descriptionCtrl: ['', Validators.required],
      //dateCtrl: ['', Validators.required]
      inithourCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      latitudeCtrl: '',
      longitudeCtrl: '',
      radiusCtrl: ''
    });
  }
  public getRoutesItem(){
    return ROUTES_COMPETENCE; 
  }

}
const ROUTES_COMPETENCE: RouteInfo[] = [
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