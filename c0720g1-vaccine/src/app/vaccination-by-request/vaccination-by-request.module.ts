import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinationByRequestListComponent } from './vaccination-by-request-list/vaccination-by-request-list.component';
import { VaccinationByRequestCreateComponent } from './vaccination-by-request-create/vaccination-by-request-create.component';
import {VaccinationByRequestRoutingModule} from './vaccination-by-request-routing.module';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [VaccinationByRequestListComponent, VaccinationByRequestCreateComponent],
  imports: [
    CommonModule,
    VaccinationByRequestRoutingModule,
    ReactiveFormsModule
  ]
})
export class VaccinationByRequestModule { }
