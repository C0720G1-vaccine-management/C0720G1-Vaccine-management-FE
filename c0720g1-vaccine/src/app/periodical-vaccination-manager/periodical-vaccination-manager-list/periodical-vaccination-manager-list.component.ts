import {Component, OnInit} from '@angular/core';
import {VaccinationManagerService} from '../vaccination-manager.service';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateSearchValidator} from '../commons/validatorDate.validator';

@Component({
  selector: 'app-periodical-vaccination-manager-list',
  templateUrl: './periodical-vaccination-manager-list.component.html',
  styleUrls: ['./periodical-vaccination-manager-list.component.scss']
})
export class PeriodicalVaccinationManagerListComponent implements OnInit {
  vaccinationId: number;
  locationName: string;
  vaccineTypeName: string;
  vaccineName: string;
  dateVaccination: string;

  formGroup: FormGroup;

  public startDate = '';
  public endDate = '';
  public name = '';
  public status = '';
  listVaccination;

  constructor(private vaccinationManagerService: VaccinationManagerService,
              private toastrService: ToastrService,
              public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchDateAndNameOrStatus(0, 1);
    this.ngSubmit();
  }

  ngSubmit() {
    this.formGroup = this.formBuilder.group({
      startDateInput: ['', [Validators.required]],
      endDateInput: ['', [Validators.required]],
      nameInput: [''],
      statusInput: [''],
    }, {validators : DateSearchValidator});
  }

  /**TrungTQ Code: Hiện danh sách và phân trang*/
  getAllVaccinationManager(pageable, type) {
    this.vaccinationManagerService.getAllVaccination(pageable, type).subscribe(data => {
      this.listVaccination = data;
      console.log(data);
    }, error => console.log(error));
  }

  /**TrungTQ Code: Tìm kiếm và phân trang*/
  searchDateAndNameOrStatus(pageable, type) {
    if (this.startDate === '' && this.endDate === '' && this.name === '' && this.status === '') {
      this.getAllVaccinationManager(pageable, type);
    } else {
      this.vaccinationManagerService.searchNameAndStatus(this.startDate, this.endDate, this.name, this.status, pageable, type).subscribe(data => {
        this.listVaccination = data;
      });
    }

  }

  /**TrungTQ Code: Xóa theo biến flag*/
  deleteVaccinationManager() {
    this.vaccinationManagerService.deleteVaccinationManager(this.vaccinationId).subscribe(data => {
      this.ngOnInit();
      this.toastrService.success('Xóa một lịch tiêm chủng định kỳ thành công!', 'Thông báo:');
    });
  }

  /**TrungTQ Code: Cập nhật trạng thái*/
  updateVaccinationStatusManager() {
    this.vaccinationManagerService.updateVaccinationManagerStatus(this.vaccinationId).subscribe(data => {
      this.ngOnInit();
      this.toastrService.success('Cập nhật lịch tiêm chủng định kỳ thành công!', 'Thông báo:');
    });
  }

  /**TrungTQ Code: Hiện nội dung sau khi search*/
  getContentVaccination(id: number, date: string, location: string, vaccineType: string, vaccine: string) {
    this.vaccinationId = id;
    this.locationName = location;
    this.vaccineTypeName = vaccineType;
    this.vaccineName = vaccine;
    this.dateVaccination = date;
  }

  /**TrungTQ Code: Cắt bớt tên vaccine*/
  getShortNameVaccine(nameVaccine: string, size: number): string {
    let nameStr = nameVaccine;
    if (nameVaccine.length > size) {
      return nameStr.substring(0, size).concat('. . . . . .');
    } else {
      return nameVaccine;
    }
  }

  /**TrungTQ Code: Hiện Mã ID */
  getCode(id: number, size: number): string {
    let num = id.toString();
    while (num.length < size) {
      num = '0' + num;
    }
    return 'LTC-' + num;
  }

  getMessageDelete() {
    this.toastrService.info('Bạn đã chọn hủy và lịch tiêm vắc-xin định này đã không được xóa', 'Thông báo hủy.');
  }

  getMessageUpdate() {
    this.toastrService.info('Bạn đã chọn hủy và lịch tiêm vắc-xin định này đã không được cập nhật', 'Thông báo hủy.');
  }


}
