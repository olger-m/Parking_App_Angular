import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../model/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {


    private apiLink
   = 'http://localhost:8080/owner';

  constructor(private http:HttpClient) { }
  getOwners(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);
  }

  getOwnerById(id:number):Observable<any>{
    return this.http.get(`${this.apiLink}/${id}`);
  }
   getCarsofOwner(id:number):Observable<any>{
    return this.http.get(`${this.apiLink}/${id}`);
  }
   updateOwner(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiLink}/${id}`, value);
  }
    deleteOwnerById(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`, { responseType: 'text' });
  }
   createOwner(owner:Owner): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, owner);
  }

}
