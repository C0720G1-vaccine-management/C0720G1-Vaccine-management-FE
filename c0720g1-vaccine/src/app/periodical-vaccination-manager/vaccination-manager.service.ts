import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IVaccination} from '../entity/IVaccination';
import {catchError} from 'rxjs/operators';
import {ILocation} from '../entity/ILocation';
import {IVaccinationType} from '../entity/IVaccinationType';
import {IVaccine} from '../entity/IVaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccinationManagerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private apiVaccinationManagerUrl = 'http://localhost:8080/api/vaccination-manager/vaccinations';
  private apiLocationUrl = 'http://localhost:8080/api/vaccination-manager/locations';
  private apiVaccinationTypeUrl = 'http://localhost:8080/api/vaccination-manager/vaccination-type';
  private apiVaccineUrl = 'http://localhost:8080/api/vaccines';

  constructor(private httpClient: HttpClient) {
  }

  getAllVaccinationManager(): Observable<IVaccination[]> {
    return this.httpClient.get<IVaccination[]>(this.apiVaccinationManagerUrl + '/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAllLocation(): Observable<ILocation[]> {
    return this.httpClient.get<ILocation[]>(this.apiLocationUrl + '/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAllVaccinationType(): Observable<IVaccinationType[]> {
    return this.httpClient.get<IVaccinationType[]>(this.apiVaccinationTypeUrl + '/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAllVaccine(): Observable<IVaccine[]> {
    return this.httpClient.get<IVaccine[]>(this.apiVaccineUrl + '/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createVaccinationManager(vaccinationManager): Observable<IVaccination> {
    return this.httpClient.post<IVaccination>(this.apiVaccinationManagerUrl, vaccinationManager)
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
