import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VaccineTransactionService} from "../../service/vaccine-transaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";

@Component({
  selector: 'app-create-vaccine-transaction',
  templateUrl: './create-vaccine-transaction.component.html',
  styleUrls: ['./create-vaccine-transaction.component.scss']
})
export class CreateVaccineTransactionComponent implements OnInit {
  public vaccineTransaction: any

  public vaccineHistoryList: IVaccinationHistory[];

  public vaccineHistoryService: VaccineHistory



  public formRegister: FormGroup;

  public check = false;

  constructor(
    private vaccineTransactionService: VaccineTransactionService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.
    this.formRegister = this.fb.group({
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

}
