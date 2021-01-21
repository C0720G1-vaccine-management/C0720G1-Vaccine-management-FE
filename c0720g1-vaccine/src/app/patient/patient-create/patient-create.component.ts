import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientService} from "../../service/patient.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss']
})
export class PatientCreateComponent implements OnInit {
  patientForm: FormGroup;

  constructor(private router: Router, private patientService: PatientService, private toastrService: ToastrService) {
  }

  validation_messages = {
    name: [
      { type: 'required', message: 'Vui lòng nhập tên' },
      { type: 'maxlength', message: 'Vui lòng nhập tên > 40.' },
    ],
    dateOfBirth: [
      { type: 'required', message: 'Vui lòng nhập ngày sinh' },
    ],
    gender: [
      { type: 'required', message: 'Vui lòng chọn giới tính' },
    ],
    guardian: [
      { type: 'maxlength', message: 'Vui lòng nhập người giám hộ có kí tự < 40' },
    ],
    phone: [
      { type: 'required', message: 'Vui lòng nhập số điện thoại' },
      {type: 'pattern', message: 'Vui lòng nhập số địa thoại đúng định dạng 090xxxxxxx or 091xxxxxxx or (84) + 90xxxxxxx or (84) + 91xxxxxxx'}
    ],
    address: [
      {type: 'maxlength', message: 'Vui lòng nhập địa chỉ < 200 kí tự'}
    ],
    email: [
      { type: 'required', message: 'Vui lòng nhập email' },
      {type: 'email', message: 'Vui lòng nhập email đúng định dạng abc@abc.abc'}
    ],
  };

  ngOnInit(): void {
    this.patientForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required,Validators.maxLength(40)]),
        dateOfBirth: new FormControl('',[Validators.required]),
        gender: new FormControl('',[Validators.required]),
        guardian: new FormControl('',[Validators.maxLength(40)]),
        phone: new FormControl('',[Validators.required,Validators.pattern("^(090|091|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$")]),
        address: new FormControl('',[Validators.maxLength(200)]),
        email: new FormControl('',[Validators.required,Validators.email])
      }
    );
  }

  create() {
    if (this.patientForm.invalid) {
      alert('lỗi');
    } else {
      this.patientService.create(this.patientForm.value).subscribe(data => {
        this.router.navigateByUrl('patient/list').then(data =>{
          // alert('More success!')

        });
      });
    }
  }

  message() {
    this.toastrService.success('Thêm thành công!','Message')
  }
}
