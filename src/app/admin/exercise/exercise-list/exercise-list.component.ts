import {Component, OnInit, ViewChild, Input, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { Router } from '@angular/router';
import { ExerciseService } from 'src/app/@core/services/exercise.service';
import { AuthService } from 'src/app/@core/services/auth.service';




@Component({
  selector: "app-exercise-list",
  templateUrl: "./exercise-list.component.html",
  styleUrls: ["./exercise-list.component.css"]
})
export class ExerciseListComponent implements OnInit {
  user:any;

  ELEMENT_DATA = [
  /*   {
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
    } */
  ];

  public exerciseSelected = {
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
    let list = this.ELEMENT_DATA.filter((exer: IExercise) => exer.idExercise !== this.exerciseSelected.idExercise)
    this.ELEMENT_DATA = list;
    this.dataSource = new MatTableDataSource<IExercise>(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
  }
    
  public openAnswerExercise(){
    console.log("ID:")
    let idExercise = this.exerciseSelected['idexercise']
    this.router.navigate( [ '/admin/exercises/answer-exercise',  { idExercise }]);
  }
  
  
  public detailExercise(){
    console.log("detail: "+this.exerciseSelected.idExercise);
  }
  
  public selectExer(exer){
    console.log("EJERCICIO SELECCIONADO")
    this.exerciseSelected = exer;
    console.log(this.exerciseSelected);
  }

  
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogOption, {
      width: '950px',
      data: this.exerciseSelected
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private exerciseService: ExerciseService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.userObservable$.subscribe( user =>{ 
      this.user = user;
      this.exerciseService.getExercises(this.user.idUser).subscribe(exercises => {
        this.ELEMENT_DATA = exercises;
        this.dataSource = new MatTableDataSource<IExercise>(this.ELEMENT_DATA);
      })
    });
    this.dataSource.paginator = this.paginator;
    
  }
  
    public getRoutesItem(){
      return ROUTES; 
    }
  

}


@Component({
  selector: 'dialog-options',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogOption {
  constructor(
    public dialogRef: MatDialogRef<DialogOption>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



const ROUTES: RouteInfo[] = [
/*   { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '/admin/exercises/exercise-menu', icon: "school", title: "Menu de Ejercicios", class: "", active: true },
  { icon: "", title: "Listado de ejercicios", class: "", active: false },
];