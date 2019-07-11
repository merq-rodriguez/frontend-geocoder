import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { Router } from '@angular/router';
import { ExerciseService } from 'src/app/@core/services/exercise.service';
import { AuthService } from 'src/app/@core/services/auth.service';




@Component({
  selector: "app-exercise-favorite",
  templateUrl: "./exercise-favorite.component.html",
  styleUrls: ["./exercise-favorite.component.css"]
})
export class ExerciseFavoriteComponent implements OnInit {
  user: any;

  ELEMENT_DATA = [];

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

  displayedColumns: string[] = ['image', 'name', 'description',  'action'];

  dataSource = new MatTableDataSource<IExercise>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public deleteExercise() {
    console.log("Ejercicio seleccionado")
    console.log(this.exerciseSelected)
    this.exerciseService.deleteFavoriteExercise(this.exerciseSelected['idexercise'], this.user.idUser)
      .subscribe( res => {
        console.log(res);
      })
    let list = this.ELEMENT_DATA.filter((exer) => exer.idexercise !== this.exerciseSelected['idexercise'])
    this.ELEMENT_DATA = list;
    this.dataSource = new MatTableDataSource<IExercise>(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
  }

  public openAnswerExercise() {
    console.log("ID:")
    let idExercise = this.exerciseSelected['idexercise']
    this.router.navigate(['/admin/answer-exercises/detail-answer', { idExercise }]);
  }


  public detailExercise() {
    console.log("detail: " + this.exerciseSelected.idExercise);
  }

  public selectExer(exer) {
    console.log("EJERCICIO SELECCIONADO")
    this.exerciseSelected = exer;
    console.log(this.exerciseSelected);
  }



  openDialog() {
    const dialogRef = this.dialog.open(DialogExerciseFavorite,{
      width: '850px',
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
  ) { }

  ngOnInit() {
    this.authService.userObservable$.subscribe(user => {
      this.user = user;
      this.exerciseService.getExercisesFavorites(this.user.idUser).subscribe(exercises => {
        console.log("GET EXERCISE FAVORITE")
        console.log(exercises);
         this.ELEMENT_DATA = exercises;
        this.dataSource = new MatTableDataSource<IExercise>(this.ELEMENT_DATA); 
      })
    });
    this.dataSource.paginator = this.paginator;

  }

  public getRoutesItem() {
    if(this.user.role === 'Student'){
      return ROUTES_STUDENT;
    }else{
      return ROUTES;
    }
  }


}

export interface DialogData {
  name: string;
  description: string;
  content: string;
}

@Component({
  selector: 'dialog-options-favorite',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogExerciseFavorite { 
  constructor(
    public dialogRef: MatDialogRef<DialogExerciseFavorite>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    
  onNoClick(): void {
    this.dialogRef.close();
  }
}



const ROUTES: RouteInfo[] = [
  /*   { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '/admin/exercises/exercise-menu', icon: "school", title: "Menu de Ejercicios", class: "", active: true },
  { icon: "", title: "Listado de ejercicios", class: "", active: false },
];

const ROUTES_STUDENT: RouteInfo[] = [
  { icon: "", title: "Ejercicios favoritos", class: "", active: false },
];