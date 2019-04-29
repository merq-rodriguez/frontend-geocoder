import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignIn } from './signin/signin.component';
import { InvitedComponent } from './invited.component';

const routes: Routes = [
  {
    path: '',
    component: InvitedComponent,
    children: [
      { path: 'sigin', component: SignIn },
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/' }
    ]
  }]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitedRoutingModule { }

export const routedComponents = [
  InvitedComponent,
  SignIn
];
