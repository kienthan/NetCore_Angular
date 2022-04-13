import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://localhost:5001/"
  constructor(private httpCLient: HttpClient) { }

  getClient(): Observable<any> {
    return this.httpCLient.get(this.url + 'api/Client');
  }
}
