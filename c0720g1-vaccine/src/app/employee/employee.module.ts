import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import {RouterModule} from "@angular/router";
import {EmployeeRoutingModule} from "./employee-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent],
    imports: [
        CommonModule,
        RouterModule,
      HttpClientModule,
      EmployeeRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
    ]
})
export class EmployeeModule { }
