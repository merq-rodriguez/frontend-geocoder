import { Component, OnInit, Input } from "@angular/core";
import { ISubtheme } from 'src/app/@core/data/subtheme-data';



@Component({
  selector: "app-subtheme-view",
  templateUrl: "./view-subtheme.component.html",
  styleUrls: ["./view-subtheme.component.css"],
})
export class ViewSubthemeComponent implements OnInit {
  
  public subthemeSelected: ISubtheme = {
    idSubtheme: '',
    name: '',
    description: 'Wikipedia en español es la edición en español de Wikipedia. Al igual que las versiones de Wikipedia que existen en otros idiomas, es una enciclopedia de contenido libre, publicada en Internet bajo las licencias ',
    contentEditor: `
    <h3> <b> Contenido del subtema </b></h1> <p> Contenido tematico </p>`,
    contentCode: 'print("Hello Word!)',
    image: 'https://www.eff.org/files/banner_library/coder-cat-2.png',
    url_video: '',
  
  }

  constructor() {}
  ngOnInit() {}

}
