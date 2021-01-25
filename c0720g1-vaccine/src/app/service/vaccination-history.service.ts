import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IVaccinationHistoryFeedbackDTO} from '../dto/IVaccinationHistoryFeedbackDTO';
import {IVaccinationHistorySendFeedbackDTO} from "../dto/IVaccinationHistorySendFeedbackDTO";
import {IVaccinationHistory} from "../entity/IVaccinationHistory";

@Injectable({
  providedIn: 'root'
})
export class VaccinationHistoryService {


  constructor(private http: HttpClient) {
  }

  private baseURL = 'http://localhost:8080/api/public';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  // findAllVaccinationHistory(patientId): Observable<any> {
  //   return this.http.get<any>(this.baseURL + '/vaccination-history/' + patientId, this.httpOptions);
  // }

  findByIdVaccinationHistory(vaccinationHistoryId): Observable<IVaccinationHistoryFeedbackDTO> {
    return this.http.get<IVaccinationHistoryFeedbackDTO>(this.baseURL + '/vaccination-history/feedback/' + vaccinationHistoryId, this.httpOptions);
  }

  findByPreStatus(vaccinationHistoryId): Observable<IVaccinationHistorySendFeedbackDTO> {
    return this.http.get<IVaccinationHistorySendFeedbackDTO>(this.baseURL + '/vaccination-history/feedback/getPreStatus/' + vaccinationHistoryId, this.httpOptions);

  }

  updateFeedback(vaccinationHistoryId, vaccinationHistory): Observable<IVaccinationHistorySendFeedbackDTO> {
    return this.http.put<IVaccinationHistorySendFeedbackDTO>(this.baseURL + '/vaccination-history/feedback/sendFeedback/' + vaccinationHistoryId, JSON.stringify(vaccinationHistory), this.httpOptions)
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  findAllVaccinationHistory(page: number ,vaccineName: string, vaccinationDate: string, patientId: number): Observable<any> {
    return this.http.get<any>(this.baseURL + '/vaccination-history/?page=' + page + '&vaccineName=' + vaccineName + '&vaccinationDate='+ vaccinationDate + "&patientId="+ patientId, this.httpOptions);
  }
}


