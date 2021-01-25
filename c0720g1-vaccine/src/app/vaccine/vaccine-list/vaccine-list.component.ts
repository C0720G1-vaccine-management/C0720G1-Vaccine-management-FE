import { Component, OnInit } from '@angular/core';
import {VaccineService} from "../vaccine.service";
import {IVaccineDTO} from "../../entity/IVaccineDTO";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.scss']
})
export class VaccineListComponent implements OnInit {
  public searchVaccine :FormGroup;
  vaccines: IVaccineDTO[] = [];
  constructor(private vaccineService:VaccineService) { }

  ngOnInit(): void {
    this.vaccineService.getAllVaccine().subscribe((data:IVaccineDTO[])=>{
      this.vaccines = data;
      console.log(data);
      this.searchVaccine = new FormGroup({
        nameVaccine : new FormControl(''),
        typeVaccine : new FormControl(''),
        originVaccine : new FormControl(''),
        statusVaccine : new FormControl('')
      })
    })
  }

  search() {
    this.vaccineService.search(this.searchVaccine.value.nameVaccine,this.searchVaccine.value.typeVaccine,this.searchVaccine.value.originVaccine,
    this.searchVaccine.value.statusVaccine).subscribe((data:IVaccineDTO[])=>{
        return this.vaccines = data
    });
    console.log(this.searchVaccine.value)
  }
}
