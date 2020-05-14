import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WalletUser } from './WalletUser';

@Injectable({
  providedIn: 'root'
})
export class WalletsignupService {

  walletAccountId: number;

  basurl1: string="http://localhost:8085/loginpage";

  baseurl2: string="http://localhost:8060";

  constructor(private http: HttpClient) {}

  createUser(walletUser : Object): Observable<Object>{
    return this.http.post(`${this.basurl1+"/register"}`, walletUser);
  }

  createWalletAccount(userId: number): Observable<any>{
    return this.http.get(`${this.baseurl2+"/create"}/${userId}`);
  }

  checkLoginDetails(walletUser: WalletUser): Observable<any>{
    return this.http.post(`${this.basurl1+"/login"}`, walletUser, {responseType: 'text'});
  }

  mapUserWallet(uid: number):Observable<any>
  {
    return this.http.get(`${this.baseurl2+"/getWalletAccountId"}/${uid}`);
  }
  
}
