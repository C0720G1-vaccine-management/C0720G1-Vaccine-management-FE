import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportAndExportComponent} from './import-and-export/import-and-export.component';


const routes: Routes = [
  {path: 'import-and-export', component: ImportAndExportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportAndExportRoutingModule { }
