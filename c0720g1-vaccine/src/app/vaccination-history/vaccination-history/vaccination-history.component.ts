import {Component, OnInit} from '@angular/core';
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";


@Component({
  selector: 'app-vaccination-history',
  templateUrl: './vaccination-history.component.html',
  styleUrls: ['./vaccination-history.component.scss']
})

export class VaccinationHistoryComponent implements OnInit {
  patientId = 1;
  vaccinationHistoryList: IVaccinationHistory[];
  page = 0;
  pageable: any;
  vaccineName = '';
  vaccinationDate = '';

  constructor(
    public vaccinationHistoryService: VaccinationHistoryService
  ) {
  }

  ngOnInit(): void {
    this.getListVaccine();

  }

  getListVaccine() {
    this.vaccinationHistoryService.findAllVaccinationHistory(this.page, this.vaccineName, this.vaccinationDate, this.patientId).subscribe(data => {
        this.vaccinationHistoryList = data.content;
        this.pageable = data;
      }
    )
  }
}
