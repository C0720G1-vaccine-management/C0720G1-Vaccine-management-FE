import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImportAndExportService {
  public API = 'http://localhost:8080/api/public/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  constructor(
    public http: HttpClient
  ) {
  }

  getListExport(): Observable<any> {
    return this.http.get(this.API + 'vaccine-price-list');
  }

  editPrice(id,price): Observable<any> {
    return this.http.put(this.API + 'vaccine-price-edit/'+id+'/'+price,price);
  }

  getExportId(id): Observable<any> {
    return this.http.get(this.API + 'getExportId/' + id)
  }

  exportVaccine(id, input): Observable<any>{
    let params = new HttpParams();
    params = params.append('input', input);
    return this.http.get(this.API + id + '/exportVaccine' , {params})
  }

  findVaccineById(idVaccine :number):Observable<any>{
    return this.http.get(this.API + 'getVaccine/' + idVaccine)
  }
}
