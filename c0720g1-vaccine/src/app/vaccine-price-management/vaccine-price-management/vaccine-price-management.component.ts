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

  constructor(
    public exportService: ImportAndExportService
  ) {
  }

  ngOnInit(): void {
    this.exportService.getListExport().subscribe(data => {
      this.exports = data.content;
    });
  }

}
