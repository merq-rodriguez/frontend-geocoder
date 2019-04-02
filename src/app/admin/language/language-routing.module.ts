import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './language.component';
import { LanguageMenuComponent } from './menu-language/language.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { CreateLanguageComponent } from './create-language/create-language.component';



const routes: Routes = [{
  path: '',
  component: LanguageComponent,
  children: [
    { path: 'menu-language',    component: LanguageMenuComponent   }, 
    { path: 'language-list',    component: LanguageListComponent   },
    { path: 'create-language',  component: CreateLanguageComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageRoutingModule { }

export const routedComponents = [
  LanguageComponent,
  LanguageMenuComponent,
  LanguageListComponent,
  CreateLanguageComponent
];
