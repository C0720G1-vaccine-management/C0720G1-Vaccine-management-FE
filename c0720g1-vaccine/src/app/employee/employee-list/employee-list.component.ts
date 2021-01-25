import { Component, OnInit } from '@angular/core';
import {IEmployeeDTO} from "../../entity/IEmployeeDTO";
import {IPosition} from "../../entity/IPosition";
import {IRole} from "../../entity/IRole";
import {Subscription} from "rxjs";
import {EmployeeService} from "../employee.service";
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList: IEmployeeDTO[];
  positionList: IPosition[];
  roleList: IRole[];
  private sub: Subscription;

  constructor(
    private employeeService : EmployeeService,
    private alertService: AlertService

  ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().toPromise().then(r => {
      this.employeeList = r;
      console.log(r);
      console.log(this.employeeList);
    });
  }

  getEmployeeCode(id: number, size: number): string {
    let num = id.toString();
    while (num.length < size) {
      num = '0' + num;
    }
    return 'NV-' + num;
  }
  idSelect;
  temp(employeeId: number) {
    this.idSelect = employeeId;
  }

  onDel() {
    this.sub = this.employeeService.deleteEmployee(this.idSelect).subscribe(
      () => {
        this.employeeList = this.employeeList.filter(employee => employee.employeeId !== this.idSelect);
        this.alertService.showAlertSuccess('Xóa nhân viên thành công!');
      });
  }

}
