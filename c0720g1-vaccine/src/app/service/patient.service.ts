import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IPatient} from "../entity/IPatient";
import {Observable} from "rxjs";
import {PatientDTO} from "../dto/PatientDTO";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = "http://localhost:8080/api/public";



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  private header: any;

  constructor(private http: HttpClient) {
    this.header = new Headers( {'Content-Type' : 'application/context'})
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



  registerVaccination(patient: IPatient): Observable<any> {
    return this.http.post<any>(this.url+ '/vaccination/create' , patient, this.header);
  }


}
