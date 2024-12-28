import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private apiUrl = 'https://dummyjson.com/products'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getData(page:any): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products?skip=${(page-1)*10}&limit=${10}`);
  }
}
