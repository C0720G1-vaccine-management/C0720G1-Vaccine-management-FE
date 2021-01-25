import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PatientService} from '../patient.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  formGroup: FormGroup;
  patientId;

  constructor(
    private formBuilder: FormBuilder,
    private patientService : PatientService,
    private router : Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      patientId:[''],
      name:[''],
      dateOfBirth:[''],
      gender:[''],
      guardian:[''],
      phone:[''],
      address:[''],
      email:['']
    });
    this.patientService.getPatientById(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(this.formGroup.patchValue(data));
      console.log(data);
    })
  }

  editPatient() {
    this.patientService.editPatient(this.formGroup.value, this.formGroup.value.patientId).subscribe(data =>{
      this.router.navigateByUrl('/patient/list')
    })

  }
}
