import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import {RouterModule} from "@angular/router";
import {EmployeeRoutingModule} from "./employee-routing.module";



@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent],
    imports: [
        CommonModule,
        RouterModule,
      EmployeeRoutingModule
    ]
})
export class EmployeeModule { }
