import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeriodicalVaccinationListComponent} from './periodical-vaccination-list/periodical-vaccination-list.component';
import {CommonModule} from '@angular/common';
import {PeriodicalVaccinationRegisterComponent} from './periodical-vaccination-register/periodical-vaccination-register.component';
import {CancelRegisterComponent} from "./cancel-register/cancel-register.component";

/* KhoaTA
 *
 */
const routes: Routes = [
  {path: '', component: PeriodicalVaccinationListComponent},
  {path: 'periodical-vaccination/register/:id', component: PeriodicalVaccinationRegisterComponent},
  {path: 'cancel-register', component: CancelRegisterComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicalVaccinationRoutingModule { }
