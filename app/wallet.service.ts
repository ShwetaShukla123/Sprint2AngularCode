import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './add-bank/User';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private baseUrl = "http://localhost:8060";

  constructor(private http: HttpClient) { }

  createTransaction(transaction : Object): Observable<any>{
    return this.http.post(`${this.baseUrl+"/transaction"}`, transaction, {responseType: 'text'});
  }

  getTransactionList(accountId: number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/transactionList"}/${accountId}`);
  }

  getAccountBalance(accountId: number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/getBalance"}/${accountId}`);
  }

  getAccountInfo(accountId: number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/getAccountInfo"}/${accountId}`);
  }

  payDthBill(dthBill: Object): Observable<any>{
    return this.http.post(`${this.baseUrl+"/pay"}`, dthBill,{responseType: 'text'});
  }

  addMoney(amount:number, accountId:number): Observable<any>{
    return this.http.get(`${this.baseUrl+"/addMoney"}/${accountId}/${amount}`);
  }

  public addBankAccount(userDetails){
    return this.http.post<any>(this.baseUrl+"/add",userDetails);
  }

  public addBanktoWallet(bankWallet: Object){
    return this.http.post<any>(this.baseUrl+"/addBankWallet",bankWallet);
  } 
  
  public checkBanktoWallet(walletAccountId: number){
    return this.http.get<any>(`${this.baseUrl + "/check"}/${walletAccountId}`)
  }

  public getBankAccountDetails(walletAccountId: number): Observable<User>{
    return this.http.get<any>(`${this.baseUrl + "/findBankDetails"}/${walletAccountId}`)
  }

  public doRegistration(BillDetails){
    alert('Your bill registered successfully')
    return this.http.post<any>(`${this.baseUrl + "/register"}`,BillDetails);
  }

  public viewAccountById(billNo){
    return this.http.get(`${this.baseUrl +"/viewAccountById"}/${billNo}`);
  }

  payElectricityBill(walletId: number, billAmount: number){
    let queryString = '?walletId=' + walletId + '&billAmount=' + billAmount;
    return this.http.get(`${this.baseUrl}`+`/payElectricityBill/`+ queryString);
  }
}