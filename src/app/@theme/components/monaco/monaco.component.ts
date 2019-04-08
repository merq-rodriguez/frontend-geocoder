import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MonacoFile } from "ngx-monaco";
import { MonacoService } from 'src/app/@core/services/monaco.service';



@Component({
  selector: "app-monaco-code",
  templateUrl: "./monaco.component.html",
  styleUrls: ["./monaco.component.css"]
})
export class MonacoComponent implements OnInit {

  @Input('code') _code
  file: MonacoFile = {
    uri: "index.js",
    language: "javascript",
    content: `console.log('Escribe aqui tu codigo...)`
  };


  constructor(private monacoService: MonacoService) { }

  ngOnInit() {
    if (this._code) {
      this.file.content = this._code
    } else {
      this.monacoService.content$.subscribe(content => this.file.content = content);
    }
  }


  //Emite todos los cambios en monaco
  onFileChange(file: MonacoFile) {
    console.log(file.content)
    this.monacoService.setContentMonaco(file.content);
  }
}
