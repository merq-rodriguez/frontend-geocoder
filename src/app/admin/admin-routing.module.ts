import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users',       loadChildren: './users/users.module#UsersModule' },
      { path: 'competences', loadChildren: './competence/competence.module#CompetenceModule' },
      { path: 'tests',       loadChildren: './test/test.module#TestModule' },
      { path: 'languages',   loadChildren: './language/language.module#LanguageModule' }
      
    ]
  }]


  
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [ AdminComponent ];
