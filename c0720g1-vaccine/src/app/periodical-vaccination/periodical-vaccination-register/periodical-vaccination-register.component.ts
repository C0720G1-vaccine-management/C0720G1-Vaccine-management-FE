import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PeriodicalVaccinationKhoaService} from "../../service/periodical-vaccination-khoa.service";
import {IPeriodicalVaccinationDTO} from "../../entity/IPeriodicalVaccinationDTO";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShowMessage} from "../../common/show-message";

@Component({
  selector: 'app-periodical-vaccination-register',
  templateUrl: './periodical-vaccination-register.component.html',
  styleUrls: ['./periodical-vaccination-register.component.scss']
})
export class PeriodicalVaccinationRegisterComponent implements OnInit {

  sub: Subscription;
  periodicalVaccination: IPeriodicalVaccinationDTO;
  patientForm: FormGroup;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute,
              private vaccinationService : PeriodicalVaccinationKhoaService,
              private router: Router,
              private showMessage: ShowMessage) {
    this.patientForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZàáạảãâầầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$')]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required, Validators.pattern('^(Nam|Nữ)$')]),
      guardian: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZàáạảãâầầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(0|\\(\\+84\\))[1-9]{1}\\d{7}$')]),
      address: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      vaccinationId: new FormControl()
    });
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.vaccinationService.getById(id).subscribe( (data: IPeriodicalVaccinationDTO) => {
        this.periodicalVaccination = data;
        console.log(data);
        console.log(this.periodicalVaccination)
      })
    })
  }

  submitVaccinationRegister() {
    this.patientForm.value.vaccinationId = this.periodicalVaccination.vaccinationId;
    console.log(this.patientForm.value);
    this.vaccinationService.saveRegister(this.patientForm.value).subscribe( (response) => {
    },() => {
      this.errorMessage = 'Đăng ký thất bại, vui lòng xem lại các thông tin'
    }, () => {
      this.showMessage.showMessageRegisterSuccessfully();
      this.router.navigateByUrl('periodical-vaccination/list')
    });
  }
}
