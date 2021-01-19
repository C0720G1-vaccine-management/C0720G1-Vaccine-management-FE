import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VaccineListComponent} from "./vaccine-list/vaccine-list.component";
import {VaccineCreateComponent} from "./vaccine-create/vaccine-create.component";


const routes: Routes = [
  {path: 'vaccine-list', component: VaccineListComponent},
  {path: 'vaccine-create', component: VaccineCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccineRoutingModule { }
