import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSubthemeDialog } from './modal/create-subtheme/create-subtheme.component';
import { ShowSubthemeDialog } from './modal/show-subtheme/show-subtheme.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'exercises',    loadChildren: './exercise/exercise.module#ExerciseModule' },
      { path: 'users',       loadChildren: './users/users.module#UsersModule' },
      { path: 'competences', loadChildren: './competence/competence.module#CompetenceModule' },
      { path: 'thematic-content',   loadChildren: './thematic-content/thematic-content.module#ThematicModule' },
      { path: 'tests',       loadChildren: './test/test.module#TestModule' },
      { path: '', redirectTo: 'thematic-content', pathMatch: 'full' },
      { path: '**', redirectTo: 'thematic-content' }
    ]
  }]


  
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]    

})
export class AdminRoutingModule { }

export const routedComponents = [
   AdminComponent, 
   DashboardComponent,
   CreateSubthemeDialog,
   ShowSubthemeDialog
  ];
