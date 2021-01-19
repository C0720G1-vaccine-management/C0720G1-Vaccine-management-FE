import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccineRoutingModule} from "./vaccine-routing.module";
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { VaccineCreateComponent } from './vaccine-create/vaccine-create.component';



@NgModule({
  declarations: [VaccineListComponent, VaccineCreateComponent],
  imports: [
    CommonModule,
    VaccineRoutingModule
  ]
})
export class VaccineModule { }
