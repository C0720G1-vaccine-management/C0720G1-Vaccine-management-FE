import {Component, OnInit} from '@angular/core';
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";
import {TokenStorageService} from "../../service/token-storage.service";


@Component({
  selector: 'app-vaccination-history',
  templateUrl: './vaccination-history.component.html',
  styleUrls: ['./vaccination-history.component.scss']
})

export class VaccinationHistoryComponent implements OnInit {
  accountId: number;
  patientId: number;
  vaccinationHistoryList: IVaccinationHistory[];
  page = 0;
  pageable: any;
  vaccineName = '';
  vaccinationDate = '';

  constructor(
    public vaccinationHistoryService: VaccinationHistoryService,
    public tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.getAccountId();
    this.getPatientId();
    this.getListVaccine();
  }

  getAccountId() {
    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.accountId = this.tokenStorageService.getUser().id;
    }
  }

  getListVaccine() {
    this.vaccinationHistoryService.findAllVaccinationHistory(this.page, this.vaccineName, this.vaccinationDate, this.patientId).subscribe(data => {
        this.vaccinationHistoryList = data.content;
        this.pageable = data;
      }
    )
  }

  getPatientId() {
    this.vaccinationHistoryService.getPatientId(this.accountId).subscribe(data => {
      this.patientId = data;
    })
  }
}
