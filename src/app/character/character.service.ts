import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Array<Character>> {
    return this.http.get<Array<Character>>(`${environment.api}/character`);
  }
}
