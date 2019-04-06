import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'exercise', component: ExerciseComponent },
      { path: 'users',       loadChildren: './users/users.module#UsersModule' },
      { path: 'competences', loadChildren: './competence/competence.module#CompetenceModule' },
      { path: 'tests',       loadChildren: './test/test.module#TestModule' },
      { path: 'thematic-content',   loadChildren: './thematic-content/thematic-content.module#ThematicModule' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
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
   ExerciseComponent
  ];
