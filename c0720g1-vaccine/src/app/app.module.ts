import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {VaccineModule} from "./vaccine/vaccine.module";
import {SecurityModule} from "./security/security.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VaccineModule,
    SecurityModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
