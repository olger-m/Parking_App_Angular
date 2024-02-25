import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParkingTransaction } from '../model/Transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
      private apiLink
   = 'http://localhost:8080/transaction';

  constructor(private http:HttpClient) { }


  
  startTransaction(vehicleId: number, parkingSpaceId: number): Observable<ParkingTransaction> {
    const queryParams = `?vehicleId=${vehicleId}&parkingSpaceId=${parkingSpaceId}`;
    const urlWithParams = `${this.apiLink}${queryParams}`;

    return this.http.post<ParkingTransaction>(urlWithParams, {});
  }

}
