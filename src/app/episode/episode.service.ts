import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Array<Episode>> {
    return this.http.get<Array<Episode>>(`${environment.api}/episode`);
  }
}
