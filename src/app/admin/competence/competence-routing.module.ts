import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetenceMenuComponent } from './competition-menu/competence.component';
import { ChampionListComponent } from './championlist/champion-list.component';
import { CreateCompetenceComponent } from './create-competition/create-competence.component';
import { CompetenceComponent } from './competence.component';
import { CompetenceListComponent } from './competitionlist/competence-list.component';
import { MapCompetenceComponent } from './map-competence/map-competence.component';


const routes: Routes = [{
  path: '',
  component: CompetenceComponent,
  children: [
    { path: 'menu-competence',     component: CompetenceMenuComponent },
    { path: 'champion-competence', component: ChampionListComponent }, 
    { path: 'create-competence',   component: CreateCompetenceComponent },
    { path: 'competence-list',     component: CompetenceListComponent },
    { path: 'map-competence',      component: MapCompetenceComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetenceRoutingModule { }

export const routedComponents = [
  CompetenceComponent,
  CompetenceMenuComponent,
  ChampionListComponent,
  CreateCompetenceComponent,
  CompetenceListComponent,
  MapCompetenceComponent
];
