import { Component, OnInit } from '@angular/core';
import { WalletTransaction } from './WalletTransaction';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';
import { WalletsignupService } from '../walletsignup.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {

  transaction : WalletTransaction = new WalletTransaction();

  isValidFlag: boolean = true;
  constructor(private walletService: WalletService,
    private router: Router,
    private walletsignupService: WalletsignupService) {}
  amount: number;
  accountId: number;
  transferType:string;

  accountBalance:number;
  ngOnInit(): void {
    this.getBalance();
  }

  transferMoney(){
    this.transaction.accountId = this.walletsignupService.walletAccountId;
    this.transaction.amount = this.amount;
    this.transaction.accountBalance = this.accountBalance;
    this.transaction.description = this.transferType;
    this.transaction.receiverAccountId = this.accountId;
    this.transaction.dateOfTransaction = new Date();
    
    this.walletService.createTransaction(this.transaction).subscribe(
      data=>{
        console.log(data);
        if(data=="Transaction Created"){
          alert("Money Transferred Successfully");
        }
        else{
          alert("Your transaction declined");
        }
      }, error=>{
        console.log(error);
      }
    )
    this.transaction = new WalletTransaction();
    this.router.navigate(['/home']);
  }

  getBalance(){
    this.walletService.getAccountBalance(this.walletsignupService.
      walletAccountId).subscribe(
        data=>{
          console.log(data)
          this.accountBalance = data;
        }, error=>{
          console.log(error);
        }
    )
  }

  isValid(){
    if(this.amount==undefined || this.accountId==undefined || this.transferType==undefined){
      this.isValidFlag = false;
    }
    else{
      this.transferMoney();
    }
  }

}
