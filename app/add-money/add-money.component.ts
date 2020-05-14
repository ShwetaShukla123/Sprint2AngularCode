import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';
import { WalletsignupService } from '../walletsignup.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  constructor(private walletService: WalletService,
    private router: Router,
    private walletsignupService: WalletsignupService) { }

  amount:number;
  valid:boolean = true;
  balance: number;

  isValidFlag: boolean = true;

  flag : boolean=false;

  ngOnInit(): void {
    this. getBalance();
    this.checkBankInfo();
  }

  getBalance(){
    this.walletService.getAccountBalance(this.walletsignupService.walletAccountId).subscribe(
      data=>{
        this.balance = data;
        this.flag = true;
      }
    );
  }

  addMoney(){
    this.walletService.addMoney(this.amount,
      this.walletsignupService.walletAccountId).subscribe(
        data=>{
          console.log(data);
          this.getBalance();
        },error=>{
          console.log(error);
        }
      )
      
  }

  checkBankInfo(){
    this.walletService.checkBanktoWallet(this.walletsignupService.
      walletAccountId).subscribe(
      data => {
        if(!data){
          this.valid = false;
          (document.getElementById("addButton") as HTMLButtonElement).disabled = true;
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

  back(){
    this.router.navigate(['/home']);
  }

  isValid(){
    if(this.amount==undefined){
      this.isValidFlag = false;
    }
    else{
      this.addMoney();
    }
  }

}
