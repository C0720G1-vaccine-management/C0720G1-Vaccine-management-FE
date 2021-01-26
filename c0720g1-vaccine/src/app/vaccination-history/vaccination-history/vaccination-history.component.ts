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
  accountEmail = 'anhkhoa@gmail.com';
  // accountEmail: string;
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
    // this.getAccountEmail();
    this.getListVaccine();
  }

  getAccountEmail() {
    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.accountEmail = this.tokenStorageService.getUser().email;
    }
  }

  getListVaccine() {
    console.log(this.accountEmail);
    this.vaccinationHistoryService.findAllVaccinationHistory(this.page, this.vaccineName, this.vaccinationDate, this.accountEmail).subscribe(data => {
        this.vaccinationHistoryList = data.content;
        this.pageable = data;
      }
    )
  }

}
