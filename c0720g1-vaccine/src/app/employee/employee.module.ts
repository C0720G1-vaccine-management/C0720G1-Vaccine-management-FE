import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {EmployeeRoutingModule} from './employee-routing.module';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent, EmployeeCreateComponent],
    imports: [
        CommonModule,
        RouterModule,
      EmployeeRoutingModule
    ]
})
export class EmployeeModule { }
