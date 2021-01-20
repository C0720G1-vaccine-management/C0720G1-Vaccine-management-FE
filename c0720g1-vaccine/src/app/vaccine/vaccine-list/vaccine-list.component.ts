import { Component, OnInit } from '@angular/core';
import {VaccineService} from "../vaccine.service";
import {IVaccine} from "../../entity/IVaccine";

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.scss']
})
export class VaccineListComponent implements OnInit {

  vaccines: IVaccine[] = [];

  constructor(private vaccineService:VaccineService) { }

  ngOnInit(): void {
    this.vaccineService.getAllVaccine().subscribe((data:IVaccine[])=>{
      this.vaccines = data;
      console.log(data);
    })
  }

}
