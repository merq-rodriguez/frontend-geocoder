import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-user-manage",
  templateUrl: "./user-manage.component.html",
  styleUrls: ["./user-manage.component.css"]
})





export class UserManageComponent implements OnInit {

  foods: Food[] = [
    { value: '0', viewValue: 'Administrador' },
    { value: '1', viewValue: 'Jugador' },
    { value: '2', viewValue: 'Docente' }
  ];

  //displayedColumns: string[] = ['position', 'nombres', '           apellidos', 'rol'];
  displayedColumns: string[] = ['position', 'nombres', 'apellidos', 'rol', 'nivel'];
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  public isAddUser: boolean = true;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  public AddUser(){
    console.log(this.isAddUser);
    return this.isAddUser = (this.isAddUser == true) ? false : true;
  }
  public getRoutesItem(){
    console.log(ROUTES_THEMATIC);
     return ROUTES_THEMATIC; 
  }
}


const ROUTES_THEMATIC: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  {  icon: "school", title: "Administrar Usuarios", class: "", active: false },
];
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1,  nombres: 'Hydrogen',          apellidos: 'xxxxxxxxx',rol: 'sadasdasH'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 2,  nombres: 'Helium',            apellidos: 'xxxxxxxxx',rol: 'sadasdasHe' , nivel:  'assdfggfgfghdsfsf'},
  { position: 3,  nombres: 'Lithium',           apellidos: 'xxxxxxxxx',rol: 'sadasdasLi' , nivel:  'assdfggfgfghdsfsf'},
  { position: 4,  nombres: 'Beryllium',         apellidos: 'xxxxxxxxx',rol: 'sadasdasBe' , nivel:  'assdfggfgfghdsfsf'},
  { position: 5,  nombres: 'Boron',             apellidos: 'xxxxxxxxx',rol: 'sadasdasB'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 6,  nombres: 'Carbon',            apellidos: 'xxxxxxxxx',rol: 'sadasdasC'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 7,  nombres: 'Nitrogen',          apellidos: 'xxxxxxxxx',rol: 'sadasdasN'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 8,  nombres: 'Oxygen',            apellidos: 'xxxxxxxxx',rol: 'sadasdasO'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 9,  nombres: 'Fluorine',          apellidos: 'xxxxxxxxx',rol: 'sadasdasF'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 10, nombres: 'Neon',              apellidos: 'xxxxxxxxx',rol: 'sadasdasNe' , nivel:  'assdfggfgfghdsfsf'},
  { position: 11, nombres: 'Sodium',            apellidos: 'xxxxxxxxx',rol: 'sadasdasNa' , nivel:  'assdfggfgfghdsfsf'},
  { position: 12, nombres: 'Magnesium',         apellidos: 'xxxxxxxxx',rol: 'sadasdasMg' , nivel:  'assdfggfgfghdsfsf'},
  { position: 13, nombres: 'Aluminum',          apellidos: 'xxxxxxxxx',rol: 'sadasdasAl' , nivel:  'assdfggfgfghdsfsf'},
  { position: 14, nombres: 'Silicon',           apellidos: 'xxxxxxxxx',rol: 'sadasdasSi' , nivel:  'assdfggfgfghdsfsf'},
  { position: 15, nombres: 'Phosphorus',        apellidos: 'xxxxxxxxx',rol: 'sadasdasP'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 16, nombres: 'Sulfur',            apellidos: 'xxxxxxxxx',rol: 'sadasdasS'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 17, nombres: 'Chlorine',          apellidos: 'xxxxxxxxx',rol: 'sadasdasCl' , nivel:  'assdfggfgfghdsfsf'},
  { position: 18, nombres: 'Argon',             apellidos: 'xxxxxxxxx',rol: 'sadasdasAr' , nivel:  'assdfggfgfghdsfsf'},
  { position: 19, nombres: 'Potassium',         apellidos: 'xxxxxxxxx',rol: 'sadasdasK'  , nivel:  'assdfggfgfghdsfsf'},
  { position: 20, nombres: 'Calcium',           apellidos: 'xxxxxxxxx',rol: 'sadasdasCa' , nivel:  'assdfggfgfghdsfsf'},
];

export interface PeriodicElement {
  position: number;
  nombres: string;
  apellidos: string;
  rol: string;
  nivel: string;
}



