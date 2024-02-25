import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingLot } from '../model/ParkingLot';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {


    private apiLink
   = 'http://localhost:8080/parkinglot';

  constructor(private http:HttpClient) { }
  getParkingLots(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);
  }

  getParkingLotById(id:number):Observable<any>{
    return this.http.get(`${this.apiLink}/${id}`);
  }
   getParkingSpacesforLot(id:number):Observable<any>{
    return this.http.get(`${this.apiLink}/${id}`);
  }
   updateParkingLot(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiLink}/${id}`, value);
  }
    deleteParkingLotById(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`, { responseType: 'text' });
  }
   createParkingLot(parkingLot:ParkingLot): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, parkingLot);
  }

}
