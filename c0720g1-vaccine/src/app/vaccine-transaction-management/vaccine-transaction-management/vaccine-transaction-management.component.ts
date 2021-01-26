import {Component, OnInit} from '@angular/core';
import {IVaccinationTransaction} from "../../entity/IVaccinationTransaction";
import {VaccineTransactionService} from "../../service/vaccine-transaction.service"
import {IImportAndExport} from "../../entity/IImportAndExport";
import {ImportAndExportService} from "../../service/import-and-export.service";

@Component({
  selector: 'app-vaccine-transaction-management',
  templateUrl: './vaccine-transaction-management.component.html',
  styleUrls: ['./vaccine-transaction-management.component.scss']
})
export class VaccineTransactionManagementComponent implements OnInit {
  public vaccineTransaction: IVaccinationTransaction
  public exports: IImportAndExport

  constructor(
    public transactionService: VaccineTransactionService,
    public exportService: ImportAndExportService
  ) {
  }

  ngOnInit(): void {
    this.transactionService.getListTransaction().subscribe(data =>{
      this.vaccineTransaction = data
      console.log(data)
    })

    this.exportService.getListExport().subscribe(data =>{
      this.exports = data;
    })
  }

}
