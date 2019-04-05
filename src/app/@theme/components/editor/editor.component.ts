import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import './ckeditor.loader'; 
import 'ckeditor';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'ngx-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  @Input() content;
  ckeConfig: any;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;

  constructor(private readonly  editorService:ContentEditorService ) {
   // this.content = '';
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  completed(){
   // this.onComplete.emit()

  }
  

  ngOnDestroy(){
   // this.editorService.destroy();
  }
 


  onChange($event: any): void {
    console.log(this.content);
    this.editorService.setBehaviorContent(this.content);
  }
}