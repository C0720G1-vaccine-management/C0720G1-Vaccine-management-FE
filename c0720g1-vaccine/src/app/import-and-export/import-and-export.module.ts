import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportAndExportComponent } from './import-and-export/import-and-export.component';
import {ImportAndExportRoutingModule} from './import-and-export-routing.module';



@NgModule({
  declarations: [ImportAndExportComponent],
  imports: [
    CommonModule,
    ImportAndExportRoutingModule
  ]
})
export class ImportAndExportModule { }
