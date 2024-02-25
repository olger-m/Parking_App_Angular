import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpaceService {
 
  
    private apiLink
   = 'http://localhost:8080/parkinglot';
  

  constructor(private http:HttpClient) { }

    getParkingSpaces(id:number):Observable<any>{
    return this.http.get(`${this.apiLink
    }/${id}/parkingspaces`);
  }
    getAvalable(parkingLotId: number): Observable<any> {
    const url = `${this.apiLink}/${parkingLotId}/free`;
    return this.http.get(url);
  }


}