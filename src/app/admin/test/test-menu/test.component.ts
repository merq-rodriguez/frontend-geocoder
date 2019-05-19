import { Component, OnInit, ViewChild } from "@angular/core";
import * as _ from "lodash";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ICardMenu } from 'src/app/@theme/components/card-menu/card-menu.component';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';



@Component({
  selector: "app-test-menu",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestMenuComponent implements OnInit {
  public selectType = "";
  public hiddenTestList: boolean = false;
  public hiddenCreateTest: boolean = false;

  menuArray: ICardMenu[] = [
    {
      name: 'Crear una test de evaluacion',
      subtitle: 'Evaluacion',
      image: '../../../../assets/img/coderninja.png',
      description: '¡Animate! entra aqui y crea un test de preguntas o ejercicios.',
      routeLink: '/admin/tests/create-test'
    },
    {
      name: 'Lista de test de evaluacion',
      subtitle: 'Evaluacion',
      description: ' Entra aqui si quieres ver todos los competencias.',
      image: '../../../../../assets/img/Prog.png',
      routeLink: '/admin/tests/test-list'
    },
    {
      name: 'Estadisticas',
      subtitle: 'Evaluacion',
      description: 'Crea un lenguaje de programacion.',
      image: '../../../../../assets/img/estadistica.png',
      routeLink: ''
    }
  ];
  

  typestest: TypeTest[] = [
    { value: "0", viewValue: "Preguntas seleccion multiple" },
    { value: "1", viewValue: "Ejercicios practicos" },
    { value: "2", viewValue: "Otros" }
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  

  constructor(  ) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  setStateTestList(){
    this.hiddenTestList = (this.hiddenTestList) ? false : true;
  }

  setStateCreateTest(){
    this.hiddenCreateTest = (this.hiddenCreateTest) ? false : true;

  }
  public getRoutesItem(){
    return ROUTES_COMPETENCE; 
  }

}


export interface TypeTest {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ROUTES_COMPETENCE: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '', icon: "school", title: "Menu Test", class: "", active: false },
];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Nombre de un test', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Nombre de un test', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Nombre de un test', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Nombre de un test', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Nombre de un test', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Nombre de un test', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nombre de un test', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Nombre de un test', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Nombre de un test', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Nombre de un test', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Nombre de un test', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Nombre de un test', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Nombre de un test', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Nombre de un test', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Nombre de un test', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Nombre de un test', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Nombre de un test', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Nombre de un test', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Nombre de un test', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Nombre de un test', weight: 40.078, symbol: 'Ca' },
];
