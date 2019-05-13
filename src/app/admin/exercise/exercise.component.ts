import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';


@Component({
  selector: "app-exercise",
  templateUrl: "./exercise.component.html",
  styleUrls: ["./exercise.component.css"]
})
export class ExerciseComponent implements OnInit {
  public id: number = 1;
  public listSubtheme = [];
  public themeColor = "";

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



  exerciseList = [
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
  

  constructor(private router: ActivatedRoute) {
    
    switch (this.id) {
      case 1:
        this.listSubtheme = this.exerciseList;
        this.themeColor = "success";
        break;
      case 2:
        this.listSubtheme = this.exerciseList;
        this.themeColor = "danger";
        break;
      case 3:
        this.listSubtheme = this.exerciseList;
        this.themeColor = "primary";
        break;
    }
    console.log(this.listSubtheme);
  }

  ngOnInit() {}
  setModeCoder() {
    this.monacoEditState.checked = this.monacoEditState.checked ? false : true;
  }

  setModeEditHTML() {
    this.EditHtmlState.checked = this.EditHtmlState.checked ? false : true;
  }
  public getRoutesItem(){
    return ROUTES_COMPETENCE; 
  }

}
const ROUTES_COMPETENCE: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '', icon: "school", title: "Ejercicios", class: "", active: false },
];