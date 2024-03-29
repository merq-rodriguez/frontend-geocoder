import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignIn } from './signin/signin.component';
import { InvitedComponent } from './invited.component';
import { SignUp } from './signup/signup.component';
import { FormCode } from './form-code/form-code.component';

const routes: Routes = [
  {
    path: '',
    component: InvitedComponent,
    children: [
      { path: 'signin', component: SignIn },
      { path: 'signup', component: SignUp },
      { path: 'form-code', component: FormCode },
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
  SignIn,
  SignUp,
  FormCode
];
