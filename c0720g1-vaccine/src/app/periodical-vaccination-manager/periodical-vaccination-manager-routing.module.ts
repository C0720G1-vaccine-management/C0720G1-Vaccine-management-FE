import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PeriodicalVaccinationManagerCreateComponent} from './periodical-vaccination-manager-create/periodical-vaccination-manager-create.component';
import {PeriodicalVaccinationManagerEditComponent} from './periodical-vaccination-manager-edit/periodical-vaccination-manager-edit.component';
import {PeriodicalVaccinationManagerListComponent} from './periodical-vaccination-manager-list/periodical-vaccination-manager-list.component';


const routes: Routes = [
  {path: 'periodical-vaccination-manager', redirectTo: 'periodical-vaccination-manager/list', pathMatch: 'full'},
  {path: 'periodical-vaccination-manager/list', component: PeriodicalVaccinationManagerListComponent},
  {path: 'periodical-vaccination-manager/create', component: PeriodicalVaccinationManagerCreateComponent},
  {path: 'periodical-vaccination-manager/:idPeriodicalVaccinationManager/edit', component: PeriodicalVaccinationManagerEditComponent},
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PeriodicalVaccinationManagerRoutingModule {
}

