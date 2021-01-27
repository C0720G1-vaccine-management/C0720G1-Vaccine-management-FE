import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VaccineTransactionManagementComponent} from "./vaccine-transaction-management/vaccine-transaction-management.component";
import {CreateVaccineTransactionComponent} from "./create-vaccine-transaction/create-vaccine-transaction.component";
import {EditVaccineTransactionComponent} from "./edit-vaccine-transaction/edit-vaccine-transaction.component";
import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {path: 'vaccine-transaction-list', component: VaccineTransactionManagementComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }},
  {path: 'vaccine-transaction-create', component: CreateVaccineTransactionComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }},
  {path: 'vaccine-transaction-edit/:id', component: EditVaccineTransactionComponent,canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccineTransactionManagementRoutingModule { }
