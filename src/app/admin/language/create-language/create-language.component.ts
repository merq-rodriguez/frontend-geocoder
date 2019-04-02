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

@Component({
  selector: "app-create-language",
  templateUrl: "./create-language.component.html",
  styleUrls: ["./create-language.component.css"]
})
export class CreateLanguageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  listCoordinates: [] = []
  hiddenTimeEnd = false;
  isLinear = false;
  valueSlider: number = 0;



  animalControl = new FormControl("", [Validators.required]);
  selectFormControl = new FormControl("", Validators.required);
  
 
  constructor(private _formBuilder: FormBuilder) {}



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
    //  nameCtrl: ['', Validators.required],
    //  descriptionCtrl: ['', Validators.required],


    });
    this.secondFormGroup = this._formBuilder.group({
    //  latitudeCtrl: '',
    //  longitudeCtrl: '',
    //  radiusCtrl: ''
    });
  }
}
