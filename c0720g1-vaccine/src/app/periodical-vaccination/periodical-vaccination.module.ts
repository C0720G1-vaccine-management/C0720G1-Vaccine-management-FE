import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicalVaccinationListComponent } from './periodical-vaccination-list/periodical-vaccination-list.component';
import {PeriodicalVaccinationRoutingModule} from './periodical-vaccination-routing.module';
import { PeriodicalVaccinationRegisterComponent } from './periodical-vaccination-register/periodical-vaccination-register.component';



@NgModule({
  declarations: [PeriodicalVaccinationListComponent, PeriodicalVaccinationRegisterComponent],
  imports: [
    CommonModule,
    PeriodicalVaccinationRoutingModule
  ]
})
export class PeriodicalVaccinationModule { }
