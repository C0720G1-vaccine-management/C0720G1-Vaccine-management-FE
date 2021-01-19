import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeriodicalVaccinationRoutingModule} from './periodical-vaccination-routing.module';
import { PeriodicalVaccinationCreateComponent } from './periodical-vaccination-create/periodical-vaccination-create.component';
import { PeriodicalVaccinationListComponent } from './periodical-vaccination-list/periodical-vaccination-list.component';
import { PeriodicalVaccinationEditComponent } from './periodical-vaccination-edit/periodical-vaccination-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [PeriodicalVaccinationCreateComponent, PeriodicalVaccinationListComponent, PeriodicalVaccinationEditComponent],
  imports: [
    CommonModule,
    PeriodicalVaccinationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeriodicalVaccinationModule { }
