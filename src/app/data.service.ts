import { Injectable } from '@angular/core';


/* Angular comes with its own HTTP library that we will use to communicate with
 a REST API to grab some data and display it on our template using HTTP client. */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //reqres.in is a free public API that we can use to grab data.

  helloService() {
    return "Angular Service"
  } 
  
  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

  baseUrl = 'http://localhost:9005/user';
  //invokes UserMicroservice
  getAccounts(employeeId: Number): Observable<Account>{

    return this.http.get<Account>(`${this.baseUrl}/${employeeId}`)


  }

}