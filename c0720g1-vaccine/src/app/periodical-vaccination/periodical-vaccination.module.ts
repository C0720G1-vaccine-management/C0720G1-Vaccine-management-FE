import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicalVaccinationComponent } from './periodical-vaccination/periodical-vaccination.component';
import {PeriodicalVaccinationRoutingModule} from './periodical-vaccination-routing.module';


@NgModule({
  declarations: [PeriodicalVaccinationComponent],
  imports: [
    CommonModule,
    PeriodicalVaccinationRoutingModule
  ]
})
export class PeriodicalVaccinationModule { }
