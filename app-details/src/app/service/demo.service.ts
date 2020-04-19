import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) { }

  getAllCountry(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountryDetails(countryName: string): Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
  }
}
