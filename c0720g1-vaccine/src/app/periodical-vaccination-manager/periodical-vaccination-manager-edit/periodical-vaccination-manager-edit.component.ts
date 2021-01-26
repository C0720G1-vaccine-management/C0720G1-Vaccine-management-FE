import {Component, OnInit} from '@angular/core';
import {IVaccination} from '../../entity/IVaccination';
import {IVaccine} from '../../entity/IVaccine';
import {ILocation} from '../../entity/ILocation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VaccinationManagerService} from '../vaccination-manager.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DateValidator} from '../commons/validatorDate.validator';
import {TimeValidator} from '../commons/validatorTime.validator';

@Component({
  selector: 'app-periodical-vaccination-manager-edit',
  templateUrl: './periodical-vaccination-manager-edit.component.html',
  styleUrls: ['./periodical-vaccination-manager-edit.component.scss']
})
export class PeriodicalVaccinationManagerEditComponent implements OnInit {

  statusString: string = 'Chưa thực hiện';
  messageDate: string = 'Ngày làm lịch tiêm chủng định kỳ không được trước ngày hiện tại!';
  messageTime: string = 'Thời gian kết thúc phải sau thời gian bắt đầu!';

  idVaccination: number;
  vaccinations: IVaccination;
  vaccineList: IVaccine[] = [];
  locationList: ILocation[] = [];

  valueAge: string;
  valueNameVaccine: string;

  formGroup: FormGroup;
  defaultValue = false;


  validate_message = {
    'startTime': [
      {type: 'required', message: 'Trường này không được để trống!'},
    ],
    'endTime': [
      {type: 'required', message: 'Trường này không được để trống!'},
    ],
    'date': [
      {type: 'required', message: 'Trường này không được để trống!'},
      {type: 'dateValid', message: 'Ngày làm lịch tiêm chủng định kỳ không được trước ngày hiện tại!'}
    ],
    'vaccineId': [
      {type: 'required', message: 'Trường này không được để trống!'}
    ],
    'locationId': [
      {type: 'required', message: 'Trường này không được để trống!'}
    ],
    'description': [
      {type: 'required', message: 'Trường này không được để trống!'}
    ]
  };

  constructor(public formBuilder: FormBuilder,
              public vaccinationManagerService: VaccinationManagerService,
              public route: ActivatedRoute,
              public toastrService: ToastrService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.getAllLocation();
    this.getAllVaccine();
    this.idVaccination = this.route.snapshot.params['idVaccinationManager'];
    this.vaccinationManagerService.findByIdVaccination(this.idVaccination).subscribe((data: IVaccination) => {
      this.vaccinations = data;
      console.log(data);
      this.formGroup = this.formBuilder.group({
        vaccinationId: [this.vaccinations.vaccinationId],
        date: [this.vaccinations.date, [Validators.required, DateValidator]],
        vaccineId: [this.vaccinations.vaccine.vaccineId, [Validators.required]],
        locationId: [this.vaccinations.location.locationId, [Validators.required]],
        description: [this.vaccinations.description, [Validators.required]],
        startTime: [this.vaccinations.startTime, [Validators.required]],
        endTime: [this.vaccinations.endTime, [Validators.required]],
      }, {validators: TimeValidator});
      this.defaultValue = true;
    });
  }

  /**TrungTQ Code: Lấy dữ liệu khi có sự kiện*/
  getValue(vaccineId: any) {
    for (let i = 0; i < this.vaccineList.length; i++) {
      if (this.vaccineList[i].vaccineId == parseInt(vaccineId)) {
        this.valueAge = this.vaccineList[i].age;
        this.valueNameVaccine = this.vaccineList[i].vaccineType.name;
      }
    }
  }

  /**TrungTQ Code: Lấy danh sách địa điểm*/
  getAllLocation() {
    this.vaccinationManagerService.getAllLocation().subscribe((data: ILocation[]) => {
      this.locationList = data;
    });
  };

  /**TrungTQ Code: Lấy danh sách vaccine*/
  getAllVaccine() {
    this.vaccinationManagerService.getAllVaccine().subscribe((data: IVaccine[]) => {
      this.vaccineList = data;
    });
  };

  /**TrungTQ Code: Xong thì quay lại trang chủ*/
  submitForm() {
    this.vaccinationManagerService.updateVaccinationManager(this.idVaccination, this.formGroup.value).subscribe(data => {
      this.router.navigateByUrl('/periodical-vaccination-manager/list');
    });
  }

  /**TrungTQ Code: Hiện thông báo*/
  showMessage() {
    this.toastrService.success('Cập nhật lịch tiêm chủng định kỳ thành công!', 'Thông báo!');
  }
}
