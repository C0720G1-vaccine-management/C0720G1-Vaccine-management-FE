import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IVaccination} from '../entity/IVaccination';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaccinationManagerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private apiVaccinationManagerUrl = 'http://localhost:8080/apiVaccination/vaccinations';

  constructor(private httpClient: HttpClient) {
  }

  getAllVaccinationManager(): Observable<IVaccination[]> {
    return this.httpClient.get<IVaccination[]>(this.apiVaccinationManagerUrl + '/')
      .pipe(
      catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
