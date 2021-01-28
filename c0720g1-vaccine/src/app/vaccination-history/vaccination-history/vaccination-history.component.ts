import {Component, OnInit} from '@angular/core';
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";
import {TokenStorageService} from "../../service/token-storage.service";
import {ProfileService} from "../../service/profile.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-vaccination-history',
  templateUrl: './vaccination-history.component.html',
  styleUrls: ['./vaccination-history.component.scss']
})

export class VaccinationHistoryComponent implements OnInit {
  accountEmail: string;
  vaccinationHistoryList: IVaccinationHistory[];
  page = 0;
  pageable: any;
  vaccineName = '';
  vaccinationDate = '';
  flag = false;

  error : string;

  patientId: string;

  constructor(
    public vaccinationHistoryService: VaccinationHistoryService,
    public tokenStorageService: TokenStorageService,
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.getAccountEmail();
    this.getListVaccine();
  }

  getAccountEmail() {
    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.accountEmail = this.tokenStorageService.getUser().email;
    }
  }

  // getListVaccine() {
  //   this.vaccinationHistoryService.findAllVaccinationHistory(this.page, this.vaccineName, this.vaccinationDate, this.accountEmail).subscribe(data => {
  //       this.vaccinationHistoryList = data.content;
  //       this.pageable = data;
  //       this.flag = true;
  //     }
  //   )
  // }

  getListVaccine() {
    this.route.paramMap.subscribe(param => {
      this.patientId = param.get('patientId');
      this.profileService.getListVaccinationHistoryByPatient(this.page, this.vaccineName, this.vaccinationDate, this.patientId).subscribe(data => {
        this.vaccinationHistoryList = data.content;
        this.pageable = data;
        this.flag = true;
      }, error => {
        this.error = 'Chưa có lịch sử tiêm';
      })
    })
  }


  resetSearch() {
    this.vaccineName = '';
    this.vaccinationDate = '';
    this.ngOnInit();
  }
}
