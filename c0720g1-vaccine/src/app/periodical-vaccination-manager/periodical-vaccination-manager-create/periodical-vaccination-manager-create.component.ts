import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IVaccine} from '../../entity/IVaccine';
import {ILocation} from '../../entity/ILocation';
import {VaccinationManagerService} from '../vaccination-manager.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DateValidator} from '../commons/validatorDate.validator';
import {TimeValidator} from '../commons/validatorTime.validator';

@Component({
  selector: 'app-periodical-vaccination-manager-create',
  templateUrl: './periodical-vaccination-manager-create.component.html',
  styleUrls: ['./periodical-vaccination-manager-create.component.scss']
})
export class PeriodicalVaccinationManagerCreateComponent implements OnInit {

  formGroup: FormGroup;
  vaccineList: IVaccine[] = [];
  locationList: ILocation[] = [];
  valueAge: string;
  valueNameVaccine: string;

  /**TrungTQ Code: Thông báo validate*/
  statusString: string = 'Chưa thực hiện';
  messageTime: string = 'Thời gian kết thúc phải sau thời gian bắt đầu!';
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
      {type: 'required', message: 'Trường này không được để trống!'},
    ]
  };

  constructor(public formBuilder: FormBuilder,
              public toastrService: ToastrService,
              public vaccinationManagerService: VaccinationManagerService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.getAllLocation();
    this.getAllVaccine();
    this.formGroup = this.formBuilder.group({
      vaccinationId: [''],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      date: ['', [Validators.required, DateValidator]],
      vaccineId: ['', [Validators.required]],
      locationId: ['', [Validators.required]],
      description: ['', [Validators.required]],
    }, {validators: TimeValidator});
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

  /**TrungTQ Code: quay lại trang chủ*/
  submitForm() {
    this.vaccinationManagerService.createVaccinationManager(this.formGroup.value).subscribe(data => {
      this.router.navigateByUrl('/periodical-vaccination-manager/list');
    });
  }

  /**TrungTQ Code: Hiện thông báo*/
  showMessageSuccess() {
    this.toastrService.success('Thêm mới lịch tiêm chủng định kỳ thành công!', 'Thông báo!');
  }

  /**
   * TrungTQ code: lấy dữ liệu của đối tượng khi có sự kiện
   * */
  getValue(vaccineId: any) {
    for (let i = 0; i < this.vaccineList.length; i++) {
      if (this.vaccineList[i].vaccineId == parseInt(vaccineId)) {
        this.valueAge = this.vaccineList[i].age;
        this.valueNameVaccine = this.vaccineList[i].vaccineType.name;
      }
    }
  }
}
