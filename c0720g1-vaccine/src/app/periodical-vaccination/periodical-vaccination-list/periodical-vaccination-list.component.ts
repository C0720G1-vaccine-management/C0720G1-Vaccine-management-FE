import { Component, OnInit } from '@angular/core';
import {PeriodicalVaccinationKhoaService} from "../../service/periodical-vaccination-khoa.service";
import {IPeriodicalVaccinationDTO} from "../../entity/IPeriodicalVaccinationDTO";

export class ISearchAndPage {
  vaccineName: string;
  startTime: string;
  endTime: string;
  date: string;
  age: string;
  currentPage: number;
  maxPage: number;


  constructor() {
    this.vaccineName = '';
    this.startTime = '';
    this.endTime = '';
    this.date = '';
    this.age = '';
    this.currentPage = 1;
    this.maxPage = 0;
  }
}

export interface TimeStamp {
  startTime: string;
  endTime: string;
}
@Component({
  selector: 'app-periodical-vaccination-list',
  templateUrl: './periodical-vaccination-list.component.html',
  styleUrls: ['./periodical-vaccination-list.component.scss']
})
export class PeriodicalVaccinationListComponent implements OnInit {

  searchData: ISearchAndPage = new ISearchAndPage();
  ageList: string[];
  time: string = "Lựa chọn";
  timeListString: string[] = [];
  registrableVaccinationList: IPeriodicalVaccinationDTO[] ;
  constructor(private vaccinationService : PeriodicalVaccinationKhoaService,) {
    this.getAgeList();
    this.getTimeList();
  }

  ngOnInit(): void {
    this.searchPeriodicalVaccination();
  }

  searchPeriodicalVaccination() {
    this.vaccinationService.findTotalPage(this.searchData).subscribe((data: number) => {
      this.searchData.maxPage = data;
    });
    this.vaccinationService.findCustomVaccination(this.searchData).subscribe( (data: IPeriodicalVaccinationDTO[]) => {
      this.registrableVaccinationList = data;
    })
  }

  getAgeList(): void {
    this.vaccinationService.getAgeList().subscribe( data => {
      this.ageList = data
    })
  }

  getTimeList(): void {
    this.timeListString = [];
    this.vaccinationService.getTimeList().subscribe( data => {
      for ( let i = 0 ; i < data.length; i++) {
        this.timeListString.push(data[i].startTime + ' - ' + data[i].endTime)
      }
      console.log(this.timeListString);
    })
  }

  search() {

    this.searchData.currentPage = 1;
    this.getAgeList();
    this.getTimeList();
    this.ngOnInit();
  }

  goFirstPage() {
    this.searchData.currentPage = 1;
    this.searchPeriodicalVaccination();
  }

  goPreviousPage() {
    this.searchData.currentPage--;
    this.searchPeriodicalVaccination();
  }

  goNextPage() {
    this.searchData.currentPage++;
    this.searchPeriodicalVaccination();
  }

  goLastPage() {
    this.searchData.currentPage = this.searchData.maxPage;
    this.searchPeriodicalVaccination();
  }

  goCustomPage() {
    console.log(this.searchData.currentPage);
    if (this.searchData.currentPage > this.searchData.maxPage){
      this.searchData.currentPage = this.searchData.maxPage
    }
    if (this.searchData.currentPage < 1) {
      this.searchData.currentPage = 1
    }
    this.searchPeriodicalVaccination();
  }

  clearSearch() {
    this.searchData.vaccineName = '';
    this.searchData.startTime = '';
    this.searchData.endTime = '';
    this.searchData.date = '';
    this.searchData.age = '';
    this.searchData.currentPage = 1;
    this.searchData.maxPage = 0;
    this.time = '';
    this.ngOnInit()
  }

  selectTime($event: any) {
    this.time = $event;
    this.searchData.startTime = this.time.substring(0,8);
    this.searchData.endTime = this.time.substring(11);
  }
}
