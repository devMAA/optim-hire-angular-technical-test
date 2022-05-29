import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Location } from './location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Array<Location>> {
    return this.http.get<Array<Location>>(`${environment.api}/location`);
  }
}
