import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
@Injectable( {
  providedIn: 'root'
})
export class RegisterComponent implements OnInit {
  formGroup:FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  formValid = false;
  constructor(private formBuild: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService,
              private router:Router) { }

  validation_messages = {
    'username': [
      {type: 'required', message: 'Trường này không được để trống!'},
   ],
    'password':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'name':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'email':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'address':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ]
  };
  ngOnInit(): void {
    //  declare form group by Linh
    this.formGroup = this.formBuild.group({
        username: ['',[Validators.required]],
        password: ['',[Validators.required]],
        name:['',[Validators.required]],
        email:['',[Validators.required]],
        address:['',[Validators.required]]
      }
    );

  }

  onSubmit() {
    if(this.formGroup.invalid){
     this.toastr.warning("Form phải được điền đúng định dạng","Warning:",{
       positionClass:'toast-bottom-right',
       timeOut: 1500,
       extendedTimeOut:1500
     })
    }else{
      this.authService.register(this.formGroup.value).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.toastr.success(data.message,"Hoàn tất: ",{
            positionClass:'toast-bottom-right',
            timeOut: 2500,
            extendedTimeOut:1500
          });
          this.router.navigateByUrl("/login");

        },
        err => {
          this.toastr.error(err.error.message,'Lỗi: ',{
            positionClass:'toast-bottom-right',
            timeOut: 1500,
            extendedTimeOut:1500
          });
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }

  }
}
