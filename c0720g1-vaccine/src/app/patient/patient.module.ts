import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPatientComponent } from './list-patient/list-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import {PatientRoutingModule} from './patient-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';



@NgModule({
  declarations: [ListPatientComponent, EditPatientComponent, DeletePatientComponent, PatientCreateComponent],
  imports: [
    CommonModule,
    PatientRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PatientModule { }
