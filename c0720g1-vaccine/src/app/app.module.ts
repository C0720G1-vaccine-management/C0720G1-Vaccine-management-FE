import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VaccinePriceManagementModule} from './vaccine-price-management/vaccine-price-management.module';
import {VaccineTransactionManagementModule} from './vaccine-transaction-management/vaccine-transaction-management.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VaccinePriceManagementModule,
    VaccineTransactionManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
