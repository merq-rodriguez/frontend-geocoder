import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Question } from 'src/app/@core/entities/question.interface';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import * as _ from "lodash";
import { Option } from 'src/app/@core/entities/option.interface';

export interface TypeTest {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-create-test",
  templateUrl: "./create-test.component.html",
  styleUrls: ["./create-test.component.css"]
})
export class CreateTestComponent implements OnInit {
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

  public exercisesList: Question[] = [];

  //Model of option new
  public newOption: Option = {
    id: null,
    name: "",
    veracity: false
  };
  //Model of question new

  public newQuestion: Question = {
    id: null,
    code: null,
    name: "",
    option: [],
    score: 0,
    state: true
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
      scoreTestCtrl: ["", Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      nameQuestionCtrl: ["", Validators.required],
      optionQuestionCtrl: []
    });
  }

  addQuestion() {
    let temp: Question = {
      id: this.getNextId(),
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
    console.log(temp.id)
  }

  addOptionList() {
    let temp: Option = {
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
    }
  }

  clearQuestion() {
    this.newQuestion = {
      id: null,
      code: null,
      name: "",
      option: [],
      score: 0,
      state: true
    };
  }

  clearOption() {
    this.newOption = {
      id: null,
      name: "",
      veracity: false
    };
  }

  setStateQuestion(id: number) {
    _.forEach(this.exercisesList, function(value: Question) {
      if (value.id == id) {
        console.log("Encontrado", value);
        if (value.state === true) {
          value.state = false;
        } else {
          console.log("no encontrado");
          value.state = true;
        }
      }
    });
  }

  removeQuestion(id: number) {
    console.log(id);
    _.remove(this.exercisesList, question => {
      return (question.id === id);
    });
    console.log("LISTAAAAAAAAAA --");
    console.log(this.exercisesList)
  }

  getNextId(): number {
    if (this.countQuestion === 0) {
      this.countQuestion++;
      return 1;
    } else {
      this.countQuestion++;
      return this.countQuestion;
    }
  }

  setModeCoder() {
    this.monacoEditState.checked = this.monacoEditState.checked ? false : true;
  }

  setModeEditHTML() {
    this.EditHtmlState.checked = this.EditHtmlState.checked ? false : true;
  }
}
