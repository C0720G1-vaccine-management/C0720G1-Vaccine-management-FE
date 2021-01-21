import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IVaccine} from "../entity/IVaccine";
import {Observable} from "rxjs";

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

  getAllVaccine(): Observable<IVaccine[]>{
    return this.http.get<IVaccine[]>(this.API + 'vaccines')
  }
}
