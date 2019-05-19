import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { log } from "util";
import * as _ from "lodash";
import { IOption } from 'src/app/@core/data/option.data';
import { IQuestion } from 'src/app/@core/data/question.data';
import { v4 as uuid } from 'uuid';



export interface TypeTest {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-test-exercise",
  templateUrl: "./test-exercise.component.html",
  styleUrls: ["./test-exercise.component.css"]
})
export class TestExerciseComponent implements OnInit {
  
  public id: number = 1;
  public themeColor = "";
  public typeTest = "";
  public selectType = "";
  public code: string = `print("Hello World")`;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  typestest: TypeTest[] = [
    { value: "0", viewValue: "Preguntas seleccion multiple" },
    { value: "1", viewValue: "Ejercicios practicos" },
    { value: "2", viewValue: "Otros" }
  ];

  public monacoEditState = {
    color: "accent",
    checked: false,
    disabled: false
  };

  public EditHtmlState = {
    color: "accent",
    checked: false,
    disabled: false
  };

  toppings = new FormControl();
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato"
  ];

 
testExercise = [
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
]


  //Model of option new
  public newOption: IOption = {
    name: "",
    veracity: false
  };
  //Model of question new

  public newQuestion: IQuestion = {
    code: null,
    name: "",
    options: [],
  };

  public countQuestion: number = 0;
  constructor(
    private router: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameTestCtrl: ["", Validators.required],
      descriptionTestCtrl: ["", Validators.required],
      scoreTestCtrl: ["", Validators.required],
      urlimageCtrl: []
    });

    this.secondFormGroup = this._formBuilder.group({
    //  nameQuestionCtrl: ["", Validators.required],
     // optionQuestionCtrl: []
    });
  }

  addExersice() {
 
  }



  clearQuestion() {
  
  }



  setModeCoder() {
    this.monacoEditState.checked = this.monacoEditState.checked ? false : true;
  }

  setModeEditHTML() {
    this.EditHtmlState.checked = this.EditHtmlState.checked ? false : true;
  }
}
