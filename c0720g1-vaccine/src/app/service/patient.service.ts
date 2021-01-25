import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IPatient} from "../entity/IPatient";
import {Observable, throwError} from "rxjs";
import {PatientDTO} from "../dto/PatientDTO";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = "http://localhost:8080/api/public";

  private header: any;

  constructor(private http: HttpClient) {
    this.header = new Headers( {'Content-Type' : 'application/context'})
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  registerVaccination(patient: IPatient): Observable<any> {
    return this.http.post<any>(this.url+ '/vaccination/create' , patient, this.header);
  }

  /**
   * Duy NP
   **/
  getAllPatient(page:number): Observable<any> {
    return this.http.get<any>(this.url + '/list?page='+page);
  }
  /**
   * Duy NP
   **/
  getPatientById(id): Observable<PatientDTO> {
    return this.http.get<PatientDTO>(this.url + '/patient/' + id);
  }
  editPatient(patient, idNeedEdit): Observable<any> {
    return this.http.put(this.url + '/editPatient/' + idNeedEdit, patient);
  }
  /**
   * Duy NP
   **/
  deletePatient(idNeedDelete: any): Observable<any> {
    return this.http.get(this.url + '/delete/' + idNeedDelete, this.httpOptions);
  }
  /**
   * Duy NP
   **/
  getAllPatientByPatientIdAndName(patientId: any, name: any, pageable): Observable<any> {
    return this.http.get<any>(this.url + '/searchFullName?name=' + name + '&patientId=' + patientId +
      '&pageable=' + pageable);
  }


  /**
   * NhiTTY
   **/
  create(patientDTO): Observable<any> {
    return this.http.post<any>(this.url + '/patient/create', JSON.stringify(patientDTO), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   *  NhiTTY
   **/
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
}
