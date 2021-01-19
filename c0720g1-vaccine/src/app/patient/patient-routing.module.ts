import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientCreateComponent} from './patient-create/patient-create.component';




const routes: Routes = [
  {path: 'patient/create', component: PatientCreateComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientRoutingModule { }
