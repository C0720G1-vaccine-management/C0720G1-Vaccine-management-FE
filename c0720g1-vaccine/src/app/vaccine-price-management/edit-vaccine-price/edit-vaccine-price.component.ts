import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ImportAndExportService} from "../../service/import-and-export.service";
import {IImportAndExport} from "../../entity/IImportAndExport";

@Component({
  selector: 'app-edit-vaccine-price',
  templateUrl: './edit-vaccine-price.component.html',
  styleUrls: ['./edit-vaccine-price.component.scss']
})
export class EditVaccinePriceComponent implements OnInit {
  public formGroup: FormGroup;
  public exportId: number;
  public check = false;
  public exports: IImportAndExport;
  defvalue = false;

  validate_message = {
    'price': [
      {type: 'required' , message: "Trường này không đc để trống"},
      {type: 'pattern' , message: "Phải là số"}
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private importAndExportService: ImportAndExportService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.exportId = Number(data.id)
      this.importAndExportService.getExportId(this.exportId).subscribe(data => {
        this.exports = data

        this.formGroup = this.formBuilder.group({
          price: [this.exports.price, [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
        this.defvalue = true;
      })
    })
  }

  submit() {

    this.importAndExportService.editPrice(this.exports.importAndExportId,this.formGroup.value.price).subscribe(data => {
      this.router.navigateByUrl('/vaccine-price-list')
    })
  }

}
