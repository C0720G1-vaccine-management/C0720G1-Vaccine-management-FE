
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IVaccinationHistoryFeedbackDTO} from '../dto/IVaccinationHistoryFeedbackDTO';
import {IVaccinationHistorySendFeedbackDTO} from "../dto/IVaccinationHistorySendFeedbackDTO";



@Injectable({
  providedIn: 'root'
})
export class VaccinationHistoryService {
  private url = "http://localhost:8080/api";
  private header: any;
  constructor(private http: HttpClient) {
    this.header = new Headers( {'Content-Type' : 'application/context'})
  }


  private baseURL = 'http://localhost:8080/api/public';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };


  findByIdVaccinationHistory(vaccinationHistoryId): Observable<IVaccinationHistoryFeedbackDTO> {
    return this.http.get<IVaccinationHistoryFeedbackDTO>(this.baseURL + '/vaccination-history/feedback/' + vaccinationHistoryId, this.httpOptions);
  }

  findByAfterStatus(vaccinationHistoryId): Observable<IVaccinationHistorySendFeedbackDTO> {
    return this.http.get<IVaccinationHistorySendFeedbackDTO>(this.baseURL + '/vaccination-history/feedback/getAfterStatus/' + vaccinationHistoryId, this.httpOptions);

  }

  updateFeedback(vaccinationHistoryId, vaccinationHistory): Observable<IVaccinationHistorySendFeedbackDTO> {
    return this.http.put<IVaccinationHistorySendFeedbackDTO>(this.baseURL + '/vaccination-history/feedback/sendFeedback/' + vaccinationHistoryId, vaccinationHistory, this.httpOptions);
  }

  findAllVaccinationHistory(page: number ,vaccineName: string, vaccinationDate: string, patientId: number): Observable<any> {
    return this.http.get<any>(this.baseURL + '/vaccination-history/?page=' + page + '&vaccineName=' + vaccineName + '&vaccinationDate='+ vaccinationDate + "&patientId="+ patientId, this.httpOptions);
  }


  getPatientId(accountId): Observable<number> {
    return this.http.get<number>(this.baseURL + '/gePatientVaccinationHistoryId/' + accountId , this.httpOptions);
  }
}


