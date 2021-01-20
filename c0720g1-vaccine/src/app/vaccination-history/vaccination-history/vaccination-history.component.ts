import { Component, OnInit } from '@angular/core';
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {Observable} from "rxjs";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";

@Component({
  selector: 'app-vaccination-history',
  templateUrl: './vaccination-history.component.html',
  styleUrls: ['./vaccination-history.component.scss']
})
export class VaccinationHistoryComponent implements OnInit {
  patientId = 1;
  page = 2;
  vaccinationHistoryList: IVaccinationHistory[] ;
  constructor(
    public vaccinationHistoryService : VaccinationHistoryService
  ) { }

  ngOnInit(): void {
       this.vaccinationHistoryService.findAllVaccinationHistory(this.patientId).subscribe((data :IVaccinationHistory[]) => {
            this.vaccinationHistoryList = data;
         console.log(data)
         }

       )
  }

}
