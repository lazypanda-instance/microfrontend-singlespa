import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endPoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http: HttpClient) { }

  fetchMenuList(): Observable<object>  {
    return this.http.get<object>(endPoint.navigation.MENU);
  }
}
