import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {

  @Input()
  deleteId: number;
  @Input()
  deleteName: string;
  constructor(
    public patientService : PatientService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  deletePatient() {
this.patientService.deletePatient(this.deleteId).subscribe(data=>{
  this.router.navigateByUrl('patient')
})
  }
}
