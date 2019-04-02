import { Component, OnInit, ViewChild, Input } from "@angular/core";
import './ckeditor.loader'; 
import 'ckeditor';

@Component({
  selector: 'ngx-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {

  @Input() state
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;

  constructor() {
    this.mycontent = ``;
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }
}