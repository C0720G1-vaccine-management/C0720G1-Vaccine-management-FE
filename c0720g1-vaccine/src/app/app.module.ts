import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {VaccinationHistoryRoutingModule} from './vaccination-history/vaccination-history-routing.module';
import {VaccinationHistoryModule} from './vaccination-history/vaccination-history.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VaccinationHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
