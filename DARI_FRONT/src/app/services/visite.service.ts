import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visite } from '../entities/visite';


@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  readonly baseUrl  = 'http://localhost:8091/SpringMVC/servlet/visites/';

  constructor(private http: HttpClient) { }
  getAll(): Observable<Visite[]> {
    return this.http.get<Visite[]>(`${this.baseUrl}retreive-visites`);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}addVisiste`, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
  findByTitle(title: any): Observable<Visite[]> {
    return this.http.get<Visite[]>(`${this.baseUrl}?title=${title}`);
  }
}

