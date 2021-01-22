import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImportAndExportService {
  public API = 'http://localhost:8080/api/';

  constructor(
    public http: HttpClient
  ) {}
  getListExport(): Observable<any>{
    return this.http.get(this.API+ 'list-vaccine-price');
  }
}
