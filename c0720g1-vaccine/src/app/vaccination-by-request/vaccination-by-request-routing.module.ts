import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VaccinationByRequestListComponent} from './vaccination-by-request-list/vaccination-by-request-list.component';
import {VaccinationByRequestCreateComponent} from './vaccination-by-request-create/vaccination-by-request-create.component';


const routes: Routes = [
  {path: 'vaccination-by-request/list', component: VaccinationByRequestListComponent},
  {path: 'vaccination-by-request/create/:id', component: VaccinationByRequestCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinationByRequestRoutingModule { }
