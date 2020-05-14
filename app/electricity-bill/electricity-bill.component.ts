import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { BillDetails } from './BillDetails';
import { WalletAccount } from '../signup/WalletAccount';
import { WalletsignupService } from '../walletsignup.service';
import { Router } from '@angular/router';
import { WalletTransaction } from '../transfer-money/WalletTransaction';

@Component({
  selector: 'app-electricity-bill',
  templateUrl: './electricity-bill.component.html',
  styleUrls: ['./electricity-bill.component.css']
})
export class ElectricityBillComponent implements OnInit {

  billDetails:any =  new BillDetails();
  billNo:number;
  transaction : WalletTransaction = new WalletTransaction();
  accountBalance: number;
  
  
  constructor(private walletService:WalletService,
    private walletsignupService:WalletsignupService,
    private router: Router) { }

  ngOnInit() {
    this.walletService.getAccountBalance(this.walletsignupService.walletAccountId).subscribe(
      data=>{
        this.accountBalance = data;
      },error=>{alert(error);}
    );
  }

public Search(){
  let resp= this.walletService.viewAccountById(this.billNo);
  resp.subscribe((data)=>this.billDetails=data);
 }
public Paybill(){
   this.paynow();
}

paynow(){
  this.transaction.accountId = this.walletsignupService.walletAccountId;
  this.transaction.amount = this.billDetails.billAmount;
  this.transaction.description = "Electricity Bill";
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
    
  alert(' Your bill paid successfully.');
  this.router.navigate(['/home']);
}

}
