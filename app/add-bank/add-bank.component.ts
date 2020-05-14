import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';
import { User } from './User';
import { BankWallet } from '../bank-details/BankWallet';
import { WalletsignupService } from '../walletsignup.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  constructor(private router:Router,
    private walletsignupService: WalletsignupService,
    private walletService: WalletService) { }

  isValid:boolean;
  accountNo: number;
  holderName: string;
  ifscCode: string;
  bankName: string;

  userDetails:User = new  User();
  bankWallet: BankWallet = new BankWallet();

  ngOnInit(): void {
    this.checkBankInfo();
  }
  checkBankInfo(){
    this.walletService.checkBanktoWallet(this.walletsignupService.
      walletAccountId).subscribe(
      data => {
        if(data){
          this.router.navigate(['/bank-details']);
        }
      },
      error=>{
        console.log(error);
      }
    );
  }


  addAccount()
  {
    this.userDetails.accountNo = this.accountNo;
    this.userDetails.holderName = this.holderName;
    this.userDetails.ifscCode = this.ifscCode;
    this.userDetails.bankName = this.bankName;

    this.bankWallet.walletAccountId = this.walletsignupService.walletAccountId;
    this.bankWallet.bankAccountId = this.userDetails.accountNo;
    this.walletService.addBanktoWallet(this.bankWallet).subscribe(
      data => {
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
    this.walletService.addBankAccount(this.userDetails)
    .subscribe( data => {
      console.log(data);
      this.router.navigate(['/bank-details']);
    });
  }

  validate(){
    if(this.bankName==undefined || this.holderName==undefined || this.ifscCode==undefined || this.accountNo==undefined){
      this.isValid = false;
    }
    else{
      this.isValid = true;
      this.addAccount();
    }
  }
}
