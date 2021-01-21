import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VaccinationHistoryService {
  private url = "http://localhost:8080/api";
  private header: any;
  constructor(private httpClient: HttpClient) {
    this.header = new Headers( {'Content-Type' : 'application/context'})
  }

  getListPeriodicVaccination(page: number, name: string, status: boolean) {
    return this.httpClient.get<any>(this.url + '/periodic-vaccination/list?name='+ name + '&status='+status + '&page=' + page);
  }
}
