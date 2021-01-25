import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {VaccineModule} from "./vaccine/vaccine.module";
import {SecurityModule} from "./security/security.module";
import {VaccinePriceManagementModule} from './vaccine-price-management/vaccine-price-management.module';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {VaccinationByRequestModule} from "./vaccination-by-request/vaccination-by-request.module";
import {HttpClientModule} from "@angular/common/http";
import {PeriodicalVaccinationModule} from "./periodical-vaccination/periodical-vaccination.module";
import {PatientModule} from "./patient/patient.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VaccineModule,
    SecurityModule,
    VaccinePriceManagementModule,
    ToastrModule.forRoot(),
    VaccinationByRequestModule,
    HttpClientModule,
    PeriodicalVaccinationModule,
    PatientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
