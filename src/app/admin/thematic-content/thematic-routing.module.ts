import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ThematicContentComponent } from './thematic-content.component';
import { LanguageMenuComponent } from './menu-language/menu-language.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { CreateLanguageComponent } from './create-language/create-language.component';
import { SubthemeComponent } from './subtheme/subtheme.component';
import { ThemeComponent } from './theme/theme.component';
import { ThematicComponent } from './thematic/thematic.component';
import { ViewLanguageComponent } from './view-language/view-language.component';
import { ViewSubthemeComponent } from './view-subtheme/view-subtheme.component';



const routes: Routes = [{
  path: '',
  component: ThematicContentComponent,
  children: [
    { path: 'menu-language',    component: LanguageMenuComponent   }, 
    { path: 'language-list',    component: LanguageListComponent   },
    { path: 'create-thematic',  component: ThematicComponent },
    { path: 'language',         component: ViewLanguageComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThematicRoutingModule { }

export const routedComponents = [
  ThematicContentComponent,
  ThematicComponent,
  LanguageMenuComponent,
  LanguageListComponent,
  CreateLanguageComponent,
  SubthemeComponent,
  ThemeComponent,
  ViewLanguageComponent,
  ViewSubthemeComponent

];
