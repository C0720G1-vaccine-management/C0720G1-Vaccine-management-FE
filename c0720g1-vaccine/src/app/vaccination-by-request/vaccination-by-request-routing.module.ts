import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VaccinationByRequestListComponent} from './vaccination-by-request-list/vaccination-by-request-list.component';
import {VaccinationByRequestCreateComponent} from './vaccination-by-request-create/vaccination-by-request-create.component';
import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {
    path: 'vaccination-by-request/list',
    component: VaccinationByRequestListComponent,
    canActivate: [AuthGuard],data:{role:'ROLE_USER'}},
  {path: 'vaccination-by-request/create', component: VaccinationByRequestCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinationByRequestRoutingModule {
}
