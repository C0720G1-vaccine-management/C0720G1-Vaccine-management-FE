import { Component, OnInit } from '@angular/core';
import {VaccinationService} from "../../service/vaccination.service";
import {PeriodicVaccinationDto} from "../../dto/PeriodicVaccinationDto";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";
import {VaccinationHistoryService} from "../../service/vaccination-history.service";

@Component({
  selector: 'app-center-periodic-vaccination',
  templateUrl: './center-periodic-vaccination.component.html',
  styleUrls: ['./center-periodic-vaccination.component.scss']
})
export class CenterPeriodicVaccinationComponent implements OnInit {

  public vaccinationHistoryList: IVaccinationHistory[];
  public name = '';
  public status = false;
  public page = 0;
  public pageable : any;

  constructor(private vaccinationHistoryService: VaccinationHistoryService ) { }

  getListPeriodicVaccination(){
    this.vaccinationHistoryService.getListPeriodicVaccination(this.page,this.name,this.status).subscribe(data => {
      this.vaccinationHistoryList = data.content;
      this.pageable = data;
      console.log(data);
    }, error => console.log(error));


  }
  ngOnInit(): void {
    this.getListPeriodicVaccination();
  }

}
