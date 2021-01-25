import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VaccineService} from "../vaccine.service";
import {ICreateDTO} from "../../entity/ICreateDTO";
import {Router} from "@angular/router";
import {IVaccineDTO} from "../../entity/IVaccineDTO";

@Component({
  selector: 'app-vaccine-create',
  templateUrl: './vaccine-create.component.html',
  styleUrls: ['./vaccine-create.component.scss']
})
export class VaccineCreateComponent implements OnInit {
  formCreateVaccine: FormGroup;
  // createVaccine:IVaccineDTO;

  constructor(private vaccineService:VaccineService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formCreateVaccine = new FormGroup({
      nameVaccine: new FormControl('',[Validators.required]),
      typeVaccine: new FormControl('',[Validators.required]),
      dateRecieve: new FormControl('',[Validators.required]),
      licenseCode: new FormControl('',[Validators.required]),
      orrigin: new FormControl('',[Validators.required]),
      provider: new FormControl('',[Validators.required]),
      unitPrice: new FormControl('',[Validators.required]),
      dosage: new FormControl('',[Validators.required]),
      quantity: new FormControl('',[Validators.required]),
      expired: new FormControl('',[Validators.required]),
      maintenance : new FormControl('',[Validators.required]),
      age : new FormControl('',[Validators.required]),
    })
  }

  save() {
    console.log(this.formCreateVaccine.value);
    this.vaccineService.createVaccineDTO(this.formCreateVaccine.value).subscribe(()=>{
      this.router.navigateByUrl('vaccine-list');
    })
  }

}
