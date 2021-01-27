import {Component, OnInit} from '@angular/core';
import {IImportAndExport} from '../../entity/IImportAndExport';
import {ImportAndExportService} from '../../service/import-and-export.service';

@Component({
  selector: 'app-vaccine-price-management',
  templateUrl: './vaccine-price-management.component.html',
  styleUrls: ['./vaccine-price-management.component.scss']
})
export class VaccinePriceManagementComponent implements OnInit {
  public exports: IImportAndExport[];
  public vaccineId: number
  keyword1: any;
  keyword2 = '';
  keyword3 = '';
  vaccineType: any;
  origin: any;
  page = 0;
  pageable: any;

  constructor(
    public exportService: ImportAndExportService
  ) {
  }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.exportService.getListExport(this.page).subscribe(data => {
      this.exports = data.content;
      this.pageable = data;
    });
    this.exportService.getListVaccineType().subscribe(data => {
      this.vaccineType = data
    })
    this.exportService.getListOrigin().subscribe(data => {
      this.origin = data
    })
  }

  search() {
    const searchCriteria = {
      keyword1: this.keyword1,
      keyword2: this.keyword2,
      keyword3: this.keyword3,
    }
    this.exportService.search(searchCriteria).subscribe(data => {
      this.exports = data.content;
      console.log(this.exports);
    })
  }

}
