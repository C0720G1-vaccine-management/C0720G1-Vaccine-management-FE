import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private router: Router,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup(
      {
        name: new FormControl(''),
        dateOfBirth: new FormControl('', Validators.required),
        idCard: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        position: new FormControl('', Validators.required),
        account: new FormControl('', Validators.required)
      }
    )
  }

  create() {
    console.log(this.employeeForm.value)
    if (this.employeeForm.invalid) {
      alert('lỗi');
    } else {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(data => {
        this.router.navigateByUrl('employee/create').then(data => {
          // alert('More success!')

        });
      });
    }
  }
}
