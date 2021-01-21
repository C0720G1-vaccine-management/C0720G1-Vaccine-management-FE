import { Component, OnInit } from '@angular/core';
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";
import {IVaccinationHistoryDTO} from "../../dto/IVaccinationHistoryDTO";

@Component({
  selector: 'app-vaccination-history',
  templateUrl: './vaccination-history.component.html',
  styleUrls: ['./vaccination-history.component.scss']
})
export class VaccinationHistoryComponent implements OnInit {
  patientId = 1;
  vaccinationHistoryList: IVaccinationHistoryDTO[] ;
  constructor(
    public vaccinationHistoryService : VaccinationHistoryService
  ) { }

  ngOnInit(): void {
       this.vaccinationHistoryService.findAllVaccinationHistory(this.patientId).subscribe((data :IVaccinationHistoryDTO[]) => {
            this.vaccinationHistoryList = data;
         console.log(this.vaccinationHistoryList)
         }

       )
  }

}
