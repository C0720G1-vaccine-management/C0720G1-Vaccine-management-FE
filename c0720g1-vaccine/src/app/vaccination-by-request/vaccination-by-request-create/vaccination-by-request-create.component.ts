import {Component, OnInit} from '@angular/core';
import {VaccineService} from "../../service/vaccine.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../service/patient.service";
import {checkDateOfBirth} from "../../validator/check-date-of-birth";
import {checkDateVaccination} from "../../validator/check-date-vaccination";
import {ShowMessage} from "../../common/show-message";

@Component({
  selector: 'app-vaccination-by-request-create',
  templateUrl: './vaccination-by-request-create.component.html',
  styleUrls: ['./vaccination-by-request-create.component.scss']
})
export class VaccinationByRequestCreateComponent implements OnInit {

  public vaccineDTO: any;

  public vaccineId: number;

  public formRegister: FormGroup;

  public check = false;

  public checkEmailDuplicate = false;

  public checkPhoneDuplicate = false;


  constructor(private vaccineService: VaccineService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private patientService: PatientService,
              private router: Router,
              private showMessage: ShowMessage) {
  }

  ngOnInit(): void {
    this.getVaccine();

    this.formRegister = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$')]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required, checkDateOfBirth]],
      guardian: [''],
      address: [''],
      phone: ['', [Validators.required, Validators.pattern('^(090|091|094|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]],
      email: ['', [Validators.required, Validators.pattern('^\\w{5,}.?\\w+(@\\w{3,8})(.\\w{3,8})+$')]],
      dateVaccination: ['', [Validators.required, checkDateVaccination]],
      vaccineId: [this.vaccineId]
    });

  }

  getVaccine() {
    this.route.paramMap.subscribe(param => {
      this.vaccineId = Number(param.get('id'));

      this.vaccineService.getVaccineById(this.vaccineId).subscribe(data => {
        this.vaccineDTO = data;
      });
    });
  }

  submit() {

    if (this.formRegister.invalid) {
      this.check = true;
      this.showMessage.showMessageCreateError();
      return;
    }

    this.patientService.registerVaccination(this.formRegister.value).subscribe(data => {

      console.log(data);
      if (data != null) {
        for (let i of data) {
          if (i.field === 'email') {
            this.checkEmailDuplicate = true;
          }
          if (i.field === 'phone') {
            this.checkPhoneDuplicate = true;
          }
        }
      }


      if (!this.checkPhoneDuplicate && !this.checkEmailDuplicate) {
        this.router.navigateByUrl('vaccination-by-request/list');
        this.showMessage.showMessageCreateSuccessfully();
      } else {
        this.showMessage.showMessageCreateError();
      }

    }, error => {
      console.log(error);
    });
  }
}
