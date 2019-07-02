import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { Router } from '@angular/router';




@Component({
  selector: "app-exercise-list",
  templateUrl: "./exercise-list.component.html",
  styleUrls: ["./exercise-list.component.css"]
})
export class ExerciseListComponent implements OnInit {


  ELEMENT_DATA: IExercise[] = [
    {
      idExercise: "1",
      name: "stringstringstringstringstringstringstringstringstring",
      description: "stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstring",
      contentEditor: "string",
      contentCode: "string",
      idCode: "string",
      output: "string",
      input: "string",
      idUser: 1,
      image: null,
      imageSrc: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      location: null,
      radius: 0
    },
    {
      idExercise: "2",
      name: "stringstringstringstringstringstringstringstring",
      description: "stringstringstringstringstringstringstringstringstring",
      contentEditor: "string",
      contentCode: "string",
      idCode: "string",
      output: "string",
      input: "string",
      idUser: 1,
      image: null,
      imageSrc: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      location: null,
      radius: 0
    },
    {
      idExercise: "3",
      name: "stringstringstringstringstringstring",
      description: "stringstringstringstringstringstringstringstringstringstringstringstring",
      contentEditor: "string",
      contentCode: "string",
      idCode: "string",
      output: "string",
      input: "string",
      idUser: 1,
      image: null,
      imageSrc: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      location: null,
      radius: 0
    }
  ];

  public exerciseSelected: IExercise = {
    idExercise: "",
    name: "",
    description: "",
    contentEditor: "",
    contentCode: "",
    output: "",
    input: "",
    image: null,
    imageSrc: "",
    location: null,
    radius: 0
  }

  displayedColumns: string[] = ['idExercise', 'image','name','description', 'radius','action'];
  
  dataSource = new MatTableDataSource<IExercise>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public deleteExercise(){
    let list:IExercise[] = this.ELEMENT_DATA.filter((exer: IExercise) => exer.idExercise !== this.exerciseSelected.idExercise)
    this.ELEMENT_DATA = list;
    this.dataSource = new MatTableDataSource<IExercise>(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
  }
    
  public openAnswerExercise(){
    console.log(this.exerciseSelected.idExercise )
    this.router.navigate(
      [
        '/admin/exercises/answer-exercise' 
       
      ])
}


  public detailExercise(){
    console.log("detail: "+this.exerciseSelected.idExercise);
  }

  public selectExer(exer){
    this.exerciseSelected = exer;
    console.log(this.exerciseSelected);
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
  }
    public getRoutesItem(){
      return ROUTES; 
    }
  
  
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogOption);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {}


}


@Component({
  selector: 'dialog-options',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogOption {}



const ROUTES: RouteInfo[] = [
/*   { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '/admin/exercises/exercise-menu', icon: "school", title: "Menu de Ejercicios", class: "", active: true },
  { icon: "", title: "Listado de ejercicios", class: "", active: false },
];