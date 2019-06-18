import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import './ckeditor.loader'; 
import 'ckeditor';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngx-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  public content;
  public observerEditor: Observable<any>;
  
  ckeConfig: any;
  @ViewChild("myckeditor") ckeditor: any;

  constructor(private readonly  editorService:ContentEditorService ) { }

  ngOnInit() {
    this.observerEditor =  this.editorService.getContent();
    this.observerEditor.subscribe(res => this.content = res);
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }


  onChange($event: any): void {
    console.log(this.content);
    this.editorService.setContent(this.content);
  }
}