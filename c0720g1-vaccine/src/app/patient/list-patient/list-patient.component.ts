import {Component, OnInit} from '@angular/core';
import {PatientDTO} from '../../entity/PatientDTO';
import {PatientService} from '../patient.service';
import {IPatient} from '../../entity/IPatient';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  listPatient: IPatient[];
  public page = 0;
  public pageable: any;

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.getListPeriodicPatient()
  }

  getListPeriodicPatient() {
    this.patientService.getAllPatient(this.page).subscribe(data=>{
      this.listPatient = data.content;
      this.pageable=data;
    },error => console.log(error))

  }
}
