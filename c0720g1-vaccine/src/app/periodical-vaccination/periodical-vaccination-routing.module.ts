import { NgModule } from '@angular/core';
import {PeriodicalVaccinationComponent} from './periodical-vaccination/periodical-vaccination.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'periodical-vaccination/list', component: PeriodicalVaccinationComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PeriodicalVaccinationRoutingModule { }
