import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IVaccineDTO} from "../entity/IVaccineDTO";
import {ICreateDTO} from "../entity/ICreateDTO";


@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  public API: string = "http://localhost:8081/api/public/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private http : HttpClient
  ) { }


  /**
   * TinVT
   * get all vaccineDTO
   * @return
   */
  getAllVaccine(index: number): Observable<IVaccineDTO[]>{
    return this.http.get<IVaccineDTO[]>(this.API + 'vaccines?index='+index)
  }


  /**
   * TinVT
   * get all vaccineDTO
   * @return
   */
  getAllVaccineNotPagination(): Observable<IVaccineDTO[]>{
    return this.http.get<IVaccineDTO[]>(this.API + 'vaccines-not-pagination')
  }



  /**
   * TinVT
   * search vaccineDTO
   * @return
   */
  search(nameVaccine:string, typeVaccine:string, originVaccine:string, statusVaccine:string): Observable<IVaccineDTO[]>{
    return this.http.get<IVaccineDTO[]>(this.API + 'search?nameVaccine='+nameVaccine+'&typeVaccine='+typeVaccine+'&originVaccine='+originVaccine+'&statusVaccine='+statusVaccine)
  }



  /**
   * TinVT
   * create new vaccineDTO
   * @return
   */
  createVaccineDTO(vaccine: ICreateDTO): Observable<ICreateDTO> {
    return this.http.post<ICreateDTO>(this.API + 'vaccine-create/', JSON.stringify(vaccine), this.httpOptions)
  }
}
