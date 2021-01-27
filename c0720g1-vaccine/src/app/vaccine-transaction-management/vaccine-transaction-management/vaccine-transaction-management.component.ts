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
  public vaccineTransaction: IVaccinationTransaction[]
  public exports: IImportAndExport[]
  page = 0
  pageable: any;
  keyword2 = '';
  keyword3 = '';

  constructor(
    public transactionService: VaccineTransactionService,
    public exportService: ImportAndExportService
  ) {
  }

  ngOnInit(): void {
    this.getList()
  }


  getList() {
    this.transactionService.getListTransaction(this.page).subscribe(data => {
      this.vaccineTransaction = data.content
      this.pageable = data
    })
    this.exportService.getListExport(this.page).subscribe(data => {
      this.exports = data;
    })

  }
  search() {
    const searchCriteria = {
      keyword2: this.keyword2,
      keyword3: this.keyword3
    }
    this.transactionService.search(searchCriteria).subscribe(data => {
      console.log(data)
      this.vaccineTransaction = data.content;
      console.log(this.vaccineTransaction);
    })
  }
}
