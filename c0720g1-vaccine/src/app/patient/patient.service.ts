import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PatientDTO} from '../entity/PatientDTO';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  public API: string = 'http://localhost:8080/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  constructor(
    private http: HttpClient
  ) {
  }

  getAllPatient(page:number): Observable<any> {
    return this.http.get<any>(this.API + 'list?page='+page);
  }

  getPatientById(id): Observable<PatientDTO> {
    return this.http.get<PatientDTO>(this.API + 'patient/' + id);
  }

  editPatient(patient, idNeedEdit): Observable<any> {
    return this.http.put(this.API + 'editPatient/' + idNeedEdit, patient);
  }

  deletePatient(idNeedDelete: any): Observable<any> {
    return this.http.delete(this.API + 'delete/' + idNeedDelete);
  }



}
