import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { VaccineCreateComponent } from './vaccine-create/vaccine-create.component';



@NgModule({
  declarations: [VaccineListComponent, VaccineCreateComponent],
  imports: [
    CommonModule
  ]
})
export class VaccineModule { }
