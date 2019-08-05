import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postContact(formData):Observable<any>{
    return this.http.post<any>('http://localhost:2400/contact',formData)
  }
  getContact():Observable<any>{
    return this.http.get<any>('http://localhost:2400/contact')
  }
  deleteContact(id: number):Observable<any>{
    return this.http.delete<any>(`http://localhost:2400/contact/${id}`)
  }
}
