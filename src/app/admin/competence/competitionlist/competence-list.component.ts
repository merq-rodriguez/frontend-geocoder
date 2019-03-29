import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';




@Component({
  selector: "app-competence-list",
  templateUrl: "./competence-list.component.html",
  styleUrls: ["./competence-list.component.css"]
})
export class CompetenceListComponent implements OnInit {


  ELEMENT_DATA: CompetenceElement[] = [
    {id: 1,  description: 'ipcion de la competencia',  type: "CHALLENGE", dateInit: '19/08/2019', hourInit: "00:09:00",state: "Active"},
    {id: 2,  description: 'Esta es una descripcion de la competencia',    type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 3,  description: 'Esta es una descripcion de la competencia',   type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 4,  description: 'Esta es una descripcion de la competencia', type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 5,  description: 'Esta es una descripcion de la competencia',     type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 6,  description: 'Esta es una descripcion de la competencia',    type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 7,  description: 'Esta es una descripcion de la competencia',  type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 8,  description: 'Esta es una descripcion de la competencia',    type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 9,  description: 'Esta es una descripcion de la competencia',  type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 10, description: 'Esta es una descripcion de la competencia',      type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 11, description: 'Esta es una descripcion de la competencia',    type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 12, description: 'Esta es una descripcion de la competencia', type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 13, description: 'Esta es una descripcion de la competencia',  type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 14, description: 'Esta es una descripcion de la competencia',   type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 15, description: 'Esta es una descripcion de la competencia',type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 16, description: 'Esta es una descripcion de la competencia',    type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 17, description: 'Esta es una descripcion de la competencia',  type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 18, description: 'Esta es una descripcion de la competencia',     type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 19, description: 'Esta es una descripcion de la competencia', type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
    {id: 20, description: 'Esta es una descripcion de la competencia',   type: "CHALLENGE", dateInit: '19/08/2019',hourInit: "00:09:00", state: "Active"},
  ];

  public compSelected:CompetenceElement = {
    id: null,
    dateInit: null,
    description: null,
    hourInit: null,
    type: null,
    state: null
  };

  displayedColumns: string[] = ['id', 'description', 'type', 'dateInit', 'hourInit', 'state','deleteAction'];
  
  dataSource = new MatTableDataSource<CompetenceElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  public deleteCompetence(){
    let list:CompetenceElement[] = this.ELEMENT_DATA.filter(comp => comp.id !== this.compSelected.id)
    this.ELEMENT_DATA = list;
    this.dataSource = new MatTableDataSource<CompetenceElement>(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
  }
  
  public updateCompetence(){
    console.log("Update: "+this.compSelected);
  }

  public detailCompetence(){
    console.log("detail: "+this.compSelected);
  }

  public selectComp(comp){
    this.compSelected = comp;
    console.log(this.compSelected);
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  constructor(public dialog: MatDialog) {}


}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}


export interface CompetenceElement {
  id: number;
  description: string;
  type: string;
  dateInit: string;
  hourInit: string;
  state: string;
}
