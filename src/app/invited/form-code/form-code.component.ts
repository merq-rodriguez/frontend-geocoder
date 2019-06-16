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

  subscribeMonaco$: any;
  private code : string = '';
  constructor(
    private localstorageService: LocalstorageService, 
    private  userService: UserService,
    private router: Router,
    private monacoService: MonacoService,

    ) { }

  ngOnInit() {
    this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.code = content );

  }

  
  


}
