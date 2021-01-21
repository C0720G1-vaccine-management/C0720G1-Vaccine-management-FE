import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import {PatientRoutingModule} from './patient-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [ListPatientComponent, EditPatientComponent, PatientCreateComponent, DeletePatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PatientModule { }
