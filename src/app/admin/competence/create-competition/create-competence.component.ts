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

export interface Animal {
  name: string;
  sound: string;
}

export interface TypeTest {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-create-competence",
  templateUrl: "./create-competence.component.html",
  styleUrls: ["./create-competence.component.css"]
})
export class CreateCompetenceComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  listCoordinates: [] = []
  hiddenTimeEnd = false;
  isLinear = false;
  valueSlider: number = 0;
   selectType = "";


  typestest: TypeTest[] = [
    { value: "0", viewValue: "Preguntas seleccion multiple" },
    { value: "1", viewValue: "Ejercicios practicos" },
    { value: "2", viewValue: "Otros" }
  ];
//Con esto vamos a mostrar y ocultar las listas de test

  testQuestions = [
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
]



  animalControl = new FormControl("", [Validators.required]);
  selectFormControl = new FormControl("", Validators.required);
  
  animals: Animal[] = [
    { name: "Multiples ubicaciones", sound: "¡Exelente eleccion!" },
    { name: "Una ubicacion", sound: "¡Fabuloso!" }
  ];

  //Fechas datepicker
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  formatLabel(value: number | null) {
    //this.valueSlider = value;
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }

    return value;
  }

  public streetMaps = tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      detectRetina: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  layers = [
    circle([1.6197586, -75.6055663], { radius: 150 }),
    circle([1.6193453, -75.6052223], { radius: 250 }),
    circle([1.6193453, -75.6152223], { radius: 250 }),
    circle([1.6293453, -75.6252223], { radius: 100 }),
    circle([1.6293453, -75.6252223], { radius: 100 }),
    circle([1.6293453, -75.6252223], { radius: 100 })
  ];
  //1.6197586,-75.6055663122
  options = {
    layers: [this.streetMaps, ...usermarkerList],
    zoom: 16,
    center: latLng(1.6297586, -75.6055663)
  };
  constructor(private _formBuilder: FormBuilder) {}

  toggleVisibility(e) {
    this.hiddenTimeEnd = e.target.checked;
    console.log(this.hiddenTimeEnd);
  }

  ngOnInit() {

  /**  this.firstFormGroup = this._formBuilder.group({
      nameCompetenceCtrl: ['', Validators.required],
      descriptionCompetenceCtrl: ['', Validators.required],
      typeLocationCtrl: ['', Validators.required],
      dateCompetenceCtrl: ['', Validators.required],
      hourInitCtrl: ['', Validators.required],
      hourEndCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      latitudeCtrl: ['', Validators.required],
      longitudeCtrl: ['', Validators.required],
      radiusCtrl: [, Validators.required]

    }); */

    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      descriptionCtrl: ['', Validators.required],
      //typelocationCtrl: ['', Validators.required]
      //dateCtrl: ['', Validators.required]
      inithourCtrl: ['', Validators.required]


    });
    this.secondFormGroup = this._formBuilder.group({
      latitudeCtrl: '',
      longitudeCtrl: '',
      radiusCtrl: ''
    });
  }
}
