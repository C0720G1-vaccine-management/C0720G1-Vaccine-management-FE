import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PeriodicalVaccinationListComponent} from './periodical-vaccination-list/periodical-vaccination-list.component';
import {PeriodicalVaccinationCreateComponent} from './periodical-vaccination-create/periodical-vaccination-create.component';
import {PeriodicalVaccinationEditComponent} from './periodical-vaccination-edit/periodical-vaccination-edit.component';

const routes: Routes = [
  {path: 'periodical-vaccination', redirectTo: 'periodical-vaccination/list', pathMatch: 'full'},
  {path: 'periodical-vaccination/list', component: PeriodicalVaccinationListComponent},
  {path: 'periodical-vaccination/create', component: PeriodicalVaccinationCreateComponent},
  {path: 'periodical-vaccination/:idPeriodicalVaccination/edit', component: PeriodicalVaccinationEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicalVaccinationRoutingModule {
}
