import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { LocalstorageService } from 'src/app/@core/services/localstorage.service';
import { MonacoService } from 'src/app/@core/services/monaco.service';

@Component({
  selector: 'form-code',
  templateUrl: './form-code.component.html',
  styleUrls: ['./form-code.component.css']
})
export class FormCode implements OnInit {
  userId: string = "Texto"
  subscribeMonaco$: any;
  private code : string = '';

  constructor(
    private monacoService: MonacoService,
   // private codeService: 

    ) { }
  setChange(){
    this.userId = "Eooooooooooooooooooooooo"
    
  }

  ngOnInit() {
    this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.code = content );
  }

 

  
  


}
