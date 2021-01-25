import { Component, OnInit } from '@angular/core';
import {IVaccination} from '../../entity/IVaccination';
import {VaccinationManagerService} from '../vaccination-manager.service';

@Component({
  selector: 'app-periodical-vaccination-manager-list',
  templateUrl: './periodical-vaccination-manager-list.component.html',
  styleUrls: ['./periodical-vaccination-manager-list.component.scss']
})
export class PeriodicalVaccinationManagerListComponent implements OnInit {
  vaccinations: IVaccination[] = [];
  constructor( private vaccinationManagerService: VaccinationManagerService) { }

  ngOnInit(): void {
    this.getAllVaccinationManager()
  }

  getAllVaccinationManager(){
    this.vaccinationManagerService.getAllVaccinationManager().subscribe((data: IVaccination[])=>{
      this.vaccinations = data;
    })
  }

  getCode(id: number, size: number): string {
    let num = id.toString();
    while (num.length < size){num = '0' + num}
    return 'LTC-'+ num;
  }

}
