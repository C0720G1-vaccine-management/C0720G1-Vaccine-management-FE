import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientService} from "../../service/patient.service";
import {ToastrService} from "ngx-toastr";
import {ShowMessage} from "../../common/show-message";
import {checkDateOfBirth} from "../../validator/check-date-of-birth";

/**
 * NhiTTY
 **/
@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss']
})
export class PatientCreateComponent implements OnInit {
  public patientForm: FormGroup;
  public check = false;
  public checkEmailDuplicate = false;
  public checkPhoneDuplicate = false;

  constructor(private router: Router,
              private patientService: PatientService,
              private toastrService: ToastrService,
              private showMessage: ShowMessage) {
  }

  validation_messages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'maxlength', message: 'Vui lòng nhập tên không quá 40 kí tự.'},
      {type: 'minlength', message: 'Vui lòng nhập tên có ít nhất 6 kí tự'},
      {type: 'pattern', message: 'Vui lòng nhập tên đúng'}
    ],
    dateOfBirth: [
      {type: 'required', message: 'Vui lòng nhập ngày sinh'},
    ],
    gender: [
      {type: 'required', message: 'Vui lòng chọn giới tính'},
    ],
    guardian: [
      {type: 'maxlength', message: 'Vui lòng nhập người giám hộ không quá 40 kí tự'},
      {type: 'minlength', message: 'Vui lòng nhập tên có ít nhất 6 kí tự'},
      {type: 'pattern', message: 'Vui lòng nhập tên người giám hộ đúng'}
    ],
    phone: [
      {type: 'required', message: 'Vui lòng nhập số điện thoại'},
      {type: 'pattern', message: 'Vui lòng nhập số địa thoại đúng định dạng 0xxxxxxxxx or (+84)xxxxxxxx'}
    ],
    address: [
      {type: 'maxlength', message: 'Vui lòng nhập địa chỉ < 200 kí tự'}
    ],
    email: [
      {type: 'required', message: 'Vui lòng nhập email'},
      {type: 'pattern', message: 'Vui lòng nhập email đúng định dạng abcabc@abc.abc'}
    ],
  };


  ngOnInit(): void {
    this.patientForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(6), Validators.pattern("^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$")]),
        dateOfBirth: new FormControl('', [Validators.required, checkDateOfBirth]),
        gender: new FormControl('', [Validators.required]),
        guardian: new FormControl('', [Validators.maxLength(40), Validators.minLength(6), Validators.pattern("^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$")]),
        phone: new FormControl('', [Validators.required, Validators.pattern("^(0|\\(\\+84\\))\\d{9}$")]),
        address: new FormControl('', [Validators.maxLength(200)]),
        email: new FormControl('', [Validators.required, Validators.pattern("^\\w{5,}.?\\w+(@\\w{3,8})(.\\w{3,8})+$")])
      }
    );
  }

  create() {
    if (this.patientForm.invalid) {
      this.check = true;
      this.showMessage.showMessageCreateError();
      return;
    }
    this.patientService.create(this.patientForm.value).subscribe(data => {

      if (data !== null) {
        for (let i of data) {
          if (i.field === 'email') {
            this.checkEmailDuplicate = true;
          }
          if (i.field === 'phone') {
            this.checkPhoneDuplicate = true;
          }
        }
        this.router.navigateByUrl('patient/list')
      }

      if (!this.checkPhoneDuplicate && !this.checkEmailDuplicate) {
        this.patientService.create(this.patientForm.value).subscribe(data => {
          this.router.navigateByUrl('patient/list').then(data => {
            this.showMessage.showMessageCreateSuccessfully();
          });
        });
      } else {
        this.showMessage.showMessageCreateError();
      }
    }, error => console.log(error));
  }
}
