import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListPatientComponent} from './list-patient/list-patient.component';
import {EditPatientComponent} from './edit-patient/edit-patient.component';
import {DeletePatientComponent} from './delete-patient/delete-patient.component';

const routes: Routes = [
  {path: 'patient', redirectTo: 'patient/list', pathMatch: 'full'},
  {path: 'patient/list', component: ListPatientComponent},
  {path: 'patient/edit', component: EditPatientComponent},
  {path: 'patient/list/delete', component: DeletePatientComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule {
}
