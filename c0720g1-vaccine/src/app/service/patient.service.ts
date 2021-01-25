import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPatient} from "../entity/IPatient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = "http://localhost:8080/api/public";

  private header: any;

  constructor(private http: HttpClient) {
    this.header = new Headers( {'Content-Type' : 'application/context'})
  }

  registerVaccination(patient: IPatient): Observable<any> {
    return this.http.post<any>(this.url+ '/vaccination/create' , patient, this.header);
  }


}
