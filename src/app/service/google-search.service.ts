import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GoogleSearchService {
  private apiKey = 'AIzaSyDoSICeqg9xM2HKSIZn53wDdrCixWeh-jY'

   private apiLink
   = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

   private proxyUrl = 'http://localhost:3000/maps';

   constructor(private http:HttpClient){
   }
  
  
   findLocation(input:string):Observable<any> {
    const url = `${this.proxyUrl}/api/place/autocomplete/json?input=${input}&key=${this.apiKey}`;
   return this.http.get(url);

  }

}
