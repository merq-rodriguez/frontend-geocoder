import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from './@core/guards/auth.guard';

const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard]},
  { path: 'home', loadChildren: './invited/invited.module#InvitedModule'},
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin' }
];

const config: ExtraOptions = {
  useHash: true,
}; 

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
