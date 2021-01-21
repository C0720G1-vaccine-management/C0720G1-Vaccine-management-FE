import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PeriodicalVaccinationManagerRoutingModule} from './periodical-vaccination-manager-routing.module';
import {PeriodicalVaccinationManagerCreateComponent} from './periodical-vaccination-manager-create/periodical-vaccination-manager-create.component';
import {PeriodicalVaccinationManagerEditComponent} from './periodical-vaccination-manager-edit/periodical-vaccination-manager-edit.component';
import { PeriodicalVaccinationManagerListComponent } from './periodical-vaccination-manager-list/periodical-vaccination-manager-list.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PeriodicalVaccinationManagerCreateComponent, PeriodicalVaccinationManagerEditComponent, PeriodicalVaccinationManagerListComponent],
  imports: [
    CommonModule,
    PeriodicalVaccinationManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PeriodicalVaccinationManagerModule {
}
