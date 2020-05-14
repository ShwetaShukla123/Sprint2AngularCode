import { Component, OnInit } from '@angular/core';
import { DthBill } from './DthBill';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';
import { WalletsignupService } from '../walletsignup.service';
import { WalletTransaction } from '../transfer-money/WalletTransaction';

@Component({
  selector: 'app-dth-bill',
  templateUrl: './dth-bill.component.html',
  styleUrls: ['./dth-bill.component.css']
})
export class DthBillComponent implements OnInit {

  constructor(private walletService: WalletService,
    private router: Router,
    private walletsignupService: WalletsignupService) { }

  dthBill: DthBill = new DthBill();
  transaction : WalletTransaction = new WalletTransaction();
  

  custname: string;
  custphno: number;
  amount: number;
  accountBalance: number;

  ngOnInit(): void {
    this.walletService.getAccountBalance(this.walletsignupService.walletAccountId).subscribe(
      data=>{
        this.accountBalance = data;
      },error=>{alert(error);}
    );
    this.dthBill = new DthBill();
  }

  payMoney(){
    this.transaction.accountId = this.walletsignupService.walletAccountId;
    this.transaction.amount = this.amount;
    this.transaction.description = "DTH Bill";
    this.transaction.dateOfTransaction = new Date();
    this.transaction.accountBalance = this.accountBalance;
    this.walletService.createTransaction(this.transaction).subscribe(
      data=>{
        console.log(data);
      }, error=>{
        console.log(error);
      }
    )
    
    
    this.transaction = new WalletTransaction();

    this.dthBill.walletAccountId = this.walletsignupService.walletAccountId;
    this.dthBill.customerName = this.custname;
    this.dthBill.customerPhno = this.custphno;
    this.dthBill.amountPay = this.amount;
    this.walletService.payDthBill(this.dthBill).subscribe(
      data=>{
        console.log(data);
        alert("Bill paid successfully");
      },error=>{
        console.log(error);
      }
    );
    this.router.navigate(['/home']);
  }
}
