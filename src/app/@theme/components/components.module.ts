import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MonacoComponent } from './monaco/monaco.component';
import { MapComponent } from './map/map.component';

import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { DialogContentExampleDialog } from 'src/app/admin/competence/competitionlist/competence-list.component';
import { MdePopoverModule } from '@material-extended/mde';
import { MonacoEditorModule } from 'ngx-monaco';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { CKEditorModule } from 'ng2-ckeditor';
import { EditorComponent } from './editor/editor.component';

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
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatMenuModule,
  MatGridListModule,
  MatExpansionModule,
  MatDialogModule,
  MatDividerModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatBottomSheetModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatTreeModule
} from "@angular/material";
import { AdminLayoutComponent } from '../layouts/admin-layout.component';
import { AsideComponent } from './aside/aside.component';
import { CardMiniComponent } from './card-mini/card-mini.component';



const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const MATERIAL_MODULES =[
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  MdePopoverModule // es aparte de material pero usa material XD
];
const CDK_MODULES = [
  DragDropModule,
  ScrollingModule,
  CdkTableModule,
  CdkTreeModule,
]
const COMPONENTS = [
  FooterComponent,
  NavbarComponent,
  AsideComponent,
  SidebarComponent,
  MonacoComponent,
  MapComponent,
  CardComponent,
  EditorComponent,
  DialogContentExampleDialog,
  CardMiniComponent,
  AdminLayoutComponent
];

const MODULES_FOR_ROOT = [
  MonacoEditorModule.forRoot(),
  LeafletModule.forRoot(),
]

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    ...CDK_MODULES,
    ...MODULES_FOR_ROOT,
    RouterModule,
    CKEditorModule,
  
    
    
  ],
  entryComponents: [ DialogContentExampleDialog ], 
  declarations: [ ...COMPONENTS ],
  exports: [ 
    ...COMPONENTS, 
    ...BASE_MODULES, 
    ...MATERIAL_MODULES, 
    ...CDK_MODULES, 
    MonacoEditorModule,
    LeafletModule,
    
  ]
})
export class ComponentsModule { }
