import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IVaccineDTO} from "../entity/IVaccineDTO";

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  public API: string = "http://localhost:8081/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private http : HttpClient
  ) { }

  getAllVaccine(): Observable<IVaccineDTO[]>{
    return this.http.get<IVaccineDTO[]>(this.API + 'vaccines')
  }

  search(nameVaccine:string, typeVaccine:string, originVaccine:string, statusVaccine:string): Observable<IVaccineDTO[]>{
    return this.http.get<IVaccineDTO[]>(this.API + 'search?nameVaccine='+nameVaccine+'&typeVaccine='+typeVaccine+'&originVaccine='+originVaccine+'&statusVaccine='+statusVaccine)
  }
}
