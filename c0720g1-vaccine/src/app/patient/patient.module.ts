import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import {PatientRoutingModule} from './patient-routing.module';



@NgModule({
  declarations: [PatientCreateComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
