import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VaccineTransactionService} from "../../service/vaccine-transaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IVaccinationHistory} from "../../entity/IVaccinationHistory";
import {VaccinationHistoryService} from "../../service/vaccination-history.service";

@Component({
  selector: 'app-create-vaccine-transaction',
  templateUrl: './create-vaccine-transaction.component.html',
  styleUrls: ['./create-vaccine-transaction.component.scss']
})
export class CreateVaccineTransactionComponent implements OnInit {
  public vaccineTransaction: any

  public vaccineHistoryList: IVaccinationHistory[];

  public vaccineHistoryService: VaccinationHistoryService

  public idVaccineHistory: number

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
    this.formRegister = this.fb.group({
      id: [''],
      name: [''],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    this.vaccineTransactionService.getListVaccineHistory().subscribe(data => {
      this.vaccineHistoryList = data;
    })
  }

  submit(){
    if (this.formRegister.invalid){
      this.check = true;
      return;
    }
    this.vaccineTransactionService.createTransaction(this.idVaccineHistory,this.formRegister.value.price,this.formRegister.value.quantity)
  }

  // searchName(name) {
  //   VaccineTransactionService.searchByName(name).subscribe(next => {
  //     this.patient = next;
  //     this.formRegister.patchValue(this.patient);
  //   })
  // }

}
