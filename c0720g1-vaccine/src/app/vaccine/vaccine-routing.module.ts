import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VaccineListComponent} from "./vaccine-list/vaccine-list.component";
import {VaccineCreateComponent} from "./vaccine-create/vaccine-create.component";
import {ImportAndExportModule} from "../import-and-export/import-and-export.module";


const routes:Routes=[
  {path:'vaccine-list',component: VaccineListComponent},
  {path:'vaccine-create',component: VaccineCreateComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImportAndExportModule
  ]
})
export class VaccineRoutingModule { }
