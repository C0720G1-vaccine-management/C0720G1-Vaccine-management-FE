import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VaccinationHistoryService {
  private url = "http://localhost:8080/api/public";
  private header: any;
  constructor(private httpClient: HttpClient) {
    this.header = new Headers( {'Content-Type' : 'application/context'})
  }

  /** LuyenNT code
   * @param page
   * @param name
   * @param status
   */
  searchPeriodicVaccination(page: number, name: string, status: boolean) {
    return this.httpClient.get<any>(this.url + '/periodic-vaccination/search?name='+ name + '&status='+status + '&page=' + page);
  }

  /** LuyenNT code
   * @param page
   * @param name
   */
  getListPeriodicVaccination(page: number, name: string) {
    return this.httpClient.get<any>(this.url + '/periodic-vaccination/list?name='+ name + '&page=' + page);
  }
}
