import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PeriodicalVaccinationKhoaService} from "../../service/periodical-vaccination-khoa.service";
import {IPeriodicalVaccinationDTO} from "../../entity/IPeriodicalVaccinationDTO";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShowMessage} from "../../common/show-message";
import {checkDateOfBirth} from "../../validator/check-date-of-birth";
import {IPatient} from "../../entity/IPatient";
import {TokenStorageService} from "../../service/token-storage.service";

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
  isSubmitted: boolean;
  currentPatient: object;
  timeListString: Array<string> = ['08:00:00 - 09:30:00', '09:30:00 - 11:00:00', '13:30:00 - 15:00:00', '15:00:00 - 16:30:00'];
  timeFrame: string;

  constructor(private activatedRoute: ActivatedRoute,
              private vaccinationService : PeriodicalVaccinationKhoaService,
              private router: Router,
              private showMessage: ShowMessage,
              public tokenStorageService: TokenStorageService) {
    this.patientForm = new FormGroup({
      time: new FormControl('', [Validators.required]),
      vaccinationId: new FormControl(),
      patientId: new FormControl(),
      startTime: new FormControl(),
      endTime: new FormControl(),
      // dateOfBirth: new FormControl('', [Validators.required, checkDateOfBirth]),
      // gender: new FormControl('', [Validators.required, Validators.pattern('^(Nam|Nữ)$')]),
      // guardian: new FormControl('', [Validators.required,Validators.maxLength(255), Validators.pattern('^[a-zA-ZàáạảãâầầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổơờớợởỡùúụủũưừứứựửữỳýỵỷỹỗđĐÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$')]),
      // phone: new FormControl('', [Validators.required, Validators.pattern('^(0|\\(\\+84\\))[1-9]{1}\\d{8}$')]),
      // address: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      // email: new FormControl('', [Validators.required, Validators.maxLength(255), Validators.email]),
      // vaccinationId: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getPatient();
    this.sub = this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.vaccinationService.getById(id).subscribe( (data: IPeriodicalVaccinationDTO) => {
        this.periodicalVaccination = data;
        console.log(data);
        console.log(this.periodicalVaccination);
        this.periodicalVaccination.duration = (this.periodicalVaccination.duration == null) ? 0 : this.periodicalVaccination.duration;
        this.periodicalVaccination.times = (this.periodicalVaccination.times == null) ? 1 : this.periodicalVaccination.times;
      })
    })
  }

  submitVaccinationRegister() {
    this.isSubmitted = true;
    this.patientForm.value.vaccinationId = this.periodicalVaccination.vaccinationId;
    console.log(this.patientForm.value);
    this.vaccinationService.saveRegister(this.patientForm.value).subscribe( (response) => {
      // this.isSubmited = true;
    },() => {
      this.showMessage.showMessageRegisterError();
    }, () => {
      this.showMessage.showMessageRegisterSuccessfully();
      this.router.navigateByUrl('')
    });
  }
  getPatient() {
    this.currentPatient =  this.tokenStorageService.getUser().patient;
    console.log(this.currentPatient);
  }
  selectTime(value: any) {
      this.patientForm.value.startTime = value.substring(0,8);
      this.patientForm.value.endTime = value.substring(11);
      // this.patientForm.value.vaccinationId = this.periodicalVaccination.vaccinationId;
      // this.patientForm.value.patientId = this.currentPatient.patientId;
  }
}
