import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MonacoFile, MonacoEditorDirective } from "ngx-monaco";
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: "app-monaco-code",
  templateUrl: "./monaco.component.html",
  styleUrls: ["./monaco.component.css"]
})
export class MonacoComponent implements OnInit {
	@ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;
  @Input('context') context;
  @Input('code') code;
  public observerEditor: Observable<any>;
	fileChange = new Subject<MonacoFile>();
    file: MonacoFile = null;
 

  constructor(public monacoService: MonacoService) {
    
   }

  ngOnInit() {
    this.observerEditor = this.monacoService.getMonacoFile();
    this.observerEditor.subscribe(res => this.file = res);
  }


  //Emite todos los cambios en monaco
  onFileChange(file: MonacoFile) {
    console.log(file.content)
    this.monacoService.setMonacoContent(file.content);
  }
}
