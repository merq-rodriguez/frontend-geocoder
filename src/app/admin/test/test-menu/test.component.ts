import { Component, OnInit, ViewChild } from "@angular/core";
import * as _ from "lodash";
import { MatPaginator, MatTableDataSource } from '@angular/material';



@Component({
  selector: "app-test-menu",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestMenuComponent implements OnInit {
  public selectType = "";

  typestest: TypeTest[] = [
    { value: "0", viewValue: "Preguntas seleccion multiple" },
    { value: "1", viewValue: "Ejercicios practicos" },
    { value: "2", viewValue: "Otros" }
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  public hiddenTestList: boolean = false;
  public hiddenCreateTest: boolean = false;

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
