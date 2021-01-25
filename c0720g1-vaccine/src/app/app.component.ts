import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./service/token-storage.service";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'c0720g1-vaccine';
  constructor( ) {

  }


}
