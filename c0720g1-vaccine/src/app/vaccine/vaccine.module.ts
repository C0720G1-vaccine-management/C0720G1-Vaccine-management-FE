import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { VaccineCreateComponent } from './vaccine-create/vaccine-create.component';
import {HttpClientModule} from "@angular/common/http";
import {VaccineRoutingModule} from "./vaccine-routing.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [VaccineListComponent, VaccineCreateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    VaccineRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class VaccineModule { }
