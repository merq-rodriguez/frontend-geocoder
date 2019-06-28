import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
    constructor(private bottomSheet: MatBottomSheet, ) { }
    ngOnInit(){}

    openBottomSheet(): void {
      this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['bottom-sheet-overview-example-sheet.css']
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private router: Router,
    private authService: AuthService,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['home/signin']);
  }
}
