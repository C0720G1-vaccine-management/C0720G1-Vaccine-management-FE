import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";

import {ToastrService} from "ngx-toastr";
import {HeaderComponent} from "../../../component/header/header.component";
import {TokenStorageService} from "../../../service/token-storage.service";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  username: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  token: string;

  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,private header: HeaderComponent,
              private toastr: ToastrService,) {
  }

  ngOnInit(): void {
    //  declare form group by Linh
    this.formGroup = this.formBuild.group({
        username: [''],
        password: ['']
      }
    );
    //  check status login or not by Linh
    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  onSubmit() {
    this.authService.login(this.formGroup.value).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.username = this.tokenStorageService.getUser().username;
        this.roles = this.tokenStorageService.getUser().roles;
        this.router.navigateByUrl("");
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toastr.error("Sai tên đăng nhập hoặc mật khẩu hoặc tài khoản chưa được kích hoạt","Đăng nhập thất bại: ",{
          timeOut: 3000,
          extendedTimeOut:1500
        })
      }
    );
  }

}
