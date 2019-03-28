import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MonacoComponent } from './monaco/monaco.component';
import { MapComponent } from './map/map.component';
import { MonacoEditorModule } from 'ngx-monaco';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CardComponent } from './card/card.component';

import {
  

  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatListModule ,
  MatDatepickerModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatCardModule,
  MatStepperModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatSliderModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MonacoEditorModule.forRoot(),
    LeafletModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule ,
    MatDatepickerModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatSliderModule,
    MatToolbarModule


  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MonacoComponent,
    MapComponent,
    CardComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MonacoComponent,
    MapComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
