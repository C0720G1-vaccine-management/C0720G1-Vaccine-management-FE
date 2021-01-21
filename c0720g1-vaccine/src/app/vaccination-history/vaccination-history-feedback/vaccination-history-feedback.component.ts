import {Component, OnInit} from '@angular/core';
import {IVaccinationHistoryDTO} from "../../dto/IVaccinationHistoryDTO";
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {IVaccinationHistoryFeedbackDTO} from "../../dto/IVaccinationHistoryFeedbackDTO";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-vaccination-history-feedback',
  templateUrl: './vaccination-history-feedback.component.html',
  styleUrls: ['./vaccination-history-feedback.component.scss']
})
export class VaccinationHistoryFeedbackComponent implements OnInit {
  vaccinationHistoryFeedback: IVaccinationHistoryFeedbackDTO;

  constructor(
    private vaccinationHistoryService: VaccinationHistoryService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.vaccinationHistoryService.findByIdVaccinationHistory(paramMap.get('id')).subscribe((data: IVaccinationHistoryFeedbackDTO) => {
          this.vaccinationHistoryFeedback = data;
        });
      });
  }

}
