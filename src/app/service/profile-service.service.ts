import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

      private apiLink
   = 'http://localhost:8080/owner';
  
  constructor(private http:HttpClient) { }

      getUserData(id:number):Observable<any>{
    return this.http.get(`${this.apiLink
    }/${id}`);
  }
    getTransactions(id:number):Observable<any>{
    return this.http.get(`${this.apiLink
    }/${id}/transaction`);
  }

}
