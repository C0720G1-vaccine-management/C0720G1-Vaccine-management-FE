import {AfterViewInit, Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {LoginComponent} from "../../security/login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable({
  providedIn: 'root',
})

export class HeaderComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  username: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: string;
  role: string;
  token: string;


  constructor(private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router) {
  }

  getUsername($event) {
    this.username = $event;
    this.closebutton.nativeElement.click();
    this.ngOnInit();
  };

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.isLoggedIn = true;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    } else {
      this.isLoggedIn = false;
    }
  }

  logOut() {
    this.tokenStorageService.signOut();
    this.ngOnInit();
  }

}
