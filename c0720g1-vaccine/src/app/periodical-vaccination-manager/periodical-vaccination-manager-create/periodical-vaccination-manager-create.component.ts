import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IVaccination} from '../../entity/IVaccination';
import {IVaccine} from '../../entity/IVaccine';
import {IVaccineType} from '../../entity/IVaccineType';
import {ILocation} from '../../entity/ILocation';
import {VaccinationManagerService} from '../vaccination-manager.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {IVaccinationType} from '../../entity/IVaccinationType';
import {IVaccinationHistory} from '../../entity/IVaccinationHistory';

@Component({
  selector: 'app-periodical-vaccination-manager-create',
  templateUrl: './periodical-vaccination-manager-create.component.html',
  styleUrls: ['./periodical-vaccination-manager-create.component.scss']
})
export class PeriodicalVaccinationManagerCreateComponent implements OnInit {

  formGroup: FormGroup;
  vaccineList: IVaccine[] = [];
  vaccinationTypeList: IVaccinationType[] = [];
  locationList: ILocation[] = [];

  constructor(public formBuilder: FormBuilder,
              public toastrService: ToastrService,
              public vaccinationManagerService: VaccinationManagerService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.getAllLocation();
    this.getAllVaccinationType();
    this.getAllVaccine();
    this.formGroup = this.formBuilder.group({
      vaccinationId: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      date: ['', [Validators.required]],
      status: ['', [Validators.required]],
      description: ['', [Validators.required]],
      vaccineId: ['', [Validators.required]],
      locationId: ['', [Validators.required]]
    });
  }

  getAllLocation() {
    this.vaccinationManagerService.getAllLocation().subscribe((data: ILocation[]) => {
      this.locationList = data;
    });
  };

  getAllVaccinationType() {
    this.vaccinationManagerService.getAllVaccinationType().subscribe((data: IVaccinationType[]) => {
      this.vaccinationTypeList = data;
    });
  };

  getAllVaccine() {
    this.vaccinationManagerService.getAllVaccine().subscribe((data: IVaccine[]) => {
      this.vaccineList = data;
    });
  };

  get errorEmp() {
    return this.formGroup.controls;
  }

  submitForm() {
    this.vaccinationManagerService.createVaccinationManager(this.formGroup.value).subscribe(data => {
      this.router.navigateByUrl('/periodical-vaccination-manager/list');
    })
  }

  showMessage() {
    this.toastrService.success('Thêm mới lịch tiêm chủng định kỳ thành công!', 'Thông báo!');
  }

  getValue() {
    this.formGroup.value.vaccineId
  }
}
