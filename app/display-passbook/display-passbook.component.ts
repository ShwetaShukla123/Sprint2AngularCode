import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WalletTransaction } from '../transfer-money/WalletTransaction';
import { WalletService } from '../wallet.service';
import { WalletsignupService } from '../walletsignup.service';
import { DatePipe } from '@angular/common';
import { WalletAccount } from '../signup/WalletAccount';

@Component({
  selector: 'app-display-passbook',
  templateUrl: './display-passbook.component.html',
  styleUrls: ['./display-passbook.component.css']
})
export class DisplayPassbookComponent implements OnInit {
  
  transactions: Observable<WalletTransaction[]>;
  walletAccount: WalletAccount = new WalletAccount();

  constructor(private walletService: WalletService,
    private router: Router,private datePipe: DatePipe,
    private walletsignupService: WalletsignupService) { }

    accountNumber: number;


  ngOnInit(): void {
    this.reloadData();
    this.walletAccount = new WalletAccount();
  }

  reloadData(){
    this.accountNumber =this.walletsignupService.walletAccountId;
    this.transactions = this.walletService.getTransactionList(this.accountNumber);
    this.walletService.getAccountInfo(this.accountNumber).subscribe(
      data=>{
        this.walletAccount = data;
        console.log(data);
      },error=>{
        console.log("error"+error);
      }
    );
    
  }
}
