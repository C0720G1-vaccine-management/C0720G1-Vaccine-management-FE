import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IVaccinationHistoryRegisteredDTO} from "../dto/IVaccinationHistoryRegisteredDTO";

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

  /**
   * list : create by LongBP
   */
  getAllRegisteredRequired(page: number, name: string) {
    return this.httpClient.get<any>(this.url + '/public/registered-for-vaccination/list?name='+ name + '&page=' + page);
  }

  /**
   * search and paging : create by LongBP
   */
  searchRegisteredRequired(page: number, name: string, status: string) {
    return this.httpClient.get<any>(this.url + '/public/registered-for-vaccination/search?name='+ name + '&status='+status + '&page=' + page);
  }

  /**
   * find by Id : create by LongBP
   */
  getByIdRegisteredRequired(id): Observable<IVaccinationHistoryRegisteredDTO> {
    return this.httpClient.get<IVaccinationHistoryRegisteredDTO>(this.url + '/public/registered-for-vaccination/view/' + id)
  }
}
