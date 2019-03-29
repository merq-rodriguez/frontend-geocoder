import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users',       loadChildren: './users/users.module#UsersModule' },
      { path: 'competences', loadChildren: './competence/competence.module#CompetenceModule' }
    ]
  }]



@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
