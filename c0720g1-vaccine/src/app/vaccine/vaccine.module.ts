import { NgModule } from '@angular/core';
import {VaccineListComponent} from "./vaccine-list/vaccine-list.component";
import {VaccineCreateComponent} from "./vaccine-create/vaccine-create.component";
import {VaccineRoutingModule} from "./vaccine-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
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
