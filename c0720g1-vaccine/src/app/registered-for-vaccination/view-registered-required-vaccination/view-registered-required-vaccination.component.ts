/**
 * VaccinationHistoryRegistered : create by LongBP
 */

import { Component, OnInit } from '@angular/core';
import {IVaccinationHistoryRegisteredDTO} from "../../dto/IVaccinationHistoryRegisteredDTO";
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-view-registered-required-vaccination',
  templateUrl: './view-registered-required-vaccination.component.html',
  styleUrls: ['./view-registered-required-vaccination.component.scss']
})
export class ViewRegisteredRequiredVaccinationComponent implements OnInit {

  public infoPatient: IVaccinationHistoryRegisteredDTO;

  constructor(private vaccinationHistoryService : VaccinationHistoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.vaccinationHistoryService.getByIdRegisteredRequired(paramMap.get('id')).subscribe((data: IVaccinationHistoryRegisteredDTO) => {
        this.infoPatient = data;
      });
    });
  }

}
