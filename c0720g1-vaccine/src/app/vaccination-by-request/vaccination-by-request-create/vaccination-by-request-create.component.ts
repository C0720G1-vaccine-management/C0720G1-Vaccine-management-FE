import { Component, OnInit } from '@angular/core';
import {VaccineService} from "../../service/vaccine.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../service/patient.service";
import {checkDateOfBirth} from "../../validator/check-date-of-birth";
import {checkDateVaccination} from "../../validator/check-date-vaccination";

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

  public emailDuplicate = '';



  constructor(private vaccineService: VaccineService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private patientService: PatientService,
              private router: Router) { }

  ngOnInit(): void {
    this.getVaccine();

    this.formRegister = this.fb.group({
      name: ['',[Validators.required, Validators.pattern('^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$')]],
      gender: ['',[Validators.required]],
      dateOfBirth: ['',[Validators.required, checkDateOfBirth]],
      guardian: ['',[Validators.required, Validators.pattern('^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$')]],
      address: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required]],
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
      return;
    }

    this.patientService.registerVaccination(this.formRegister.value).subscribe(data => {

      console.log(data.defaultMessage);
      if (data.defaultMessage != null) {
        this.check = true;
        this.emailDuplicate = data.defaultMessage;
      }

      // this.router.navigateByUrl('vaccination-by-request/list')
    }, error => console.log(error));
  }
}
