import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";


const routes: Routes = [
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/edit-employee/:id', component: EmployeeEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
