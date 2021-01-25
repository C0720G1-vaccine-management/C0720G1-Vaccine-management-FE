import {Component, Injectable, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser:string;
  roles: string[] = [];
  token: string;
  constructor(private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
  }
  logOut() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl("/");
  }

}
