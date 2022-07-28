import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private http:HttpClient) { }

  // list transactions

  public getListTransactions(){
    return this.http.get(environment.api +'/transaction/list')
  }

}
