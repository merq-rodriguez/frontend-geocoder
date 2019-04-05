import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import * as _ from "lodash";
import { IQuestion } from 'src/app/@core/data/question.data';
import { IOption } from 'src/app/@core/data/option.data';



export interface TypeTest {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-test-question",
  templateUrl: "./test-question.component.html",
  styleUrls: ["./test-question.component.css"]
})
export class TestQuestionComponent implements OnInit {
  panelOpenState = false;

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

  public questionList: IQuestion[] = [];

  //Model of option new
  public newOption: IOption = {
    name: "",
    veracity: false
  };
  //Model of question new

  public newQuestion: IQuestion = {
    code: null,
    name: "",
    options: null
  };

  public countQuestion: number = 0;
  constructor(
    private router: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      urlimageCtrl: ["", Validators.required],
      nameTestCtrl: ["", Validators.required],
      descriptionTestCtrl: ["", Validators.required],
      scoreTestCtrl: ["", Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      nameQuestionCtrl: [],
      optionQuestionCtrl: []
    });
  }

  addQuestion() {
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
  }

  addOptionList() {
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
  }

  clearQuestion() {
   /*  this.newQuestion = {
      id: null,
      code: null,
      name: "",
      option: [],
      score: 0,
      state: true
    }; */
  }

  clearOption() {
   /*  this.newOption = {
      id: null,
      name: "",
      veracity: false
    }; */
  }

  setStateQuestion(id: number) {
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
  }

  removeQuestion(id: number) {
/*     console.log(id);
    _.remove(this.questionList, question => {
      return (question.id === id);
    });
    console.log("LISTAAAAAAAAAA --");
    console.log(this.questionList) */
  }


  setModeCoder() {
    this.monacoEditState.checked = this.monacoEditState.checked ? false : true;
  }

  setModeEditHTML() {
    this.EditHtmlState.checked = this.EditHtmlState.checked ? false : true;
  }
}
