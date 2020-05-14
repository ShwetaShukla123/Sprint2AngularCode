import { Component, OnInit } from '@angular/core';
import { User } from '../add-bank/User';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';
import { WalletsignupService } from '../walletsignup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  userObj: Observable<User>;

  user: User = new User();

  constructor(private router:Router,
    private walletsignupService: WalletsignupService,
    private walletService: WalletService) { }
  
  ngOnInit(): void {
    this.show();
  }

  show()
  {
    this.userObj = this.walletService.getBankAccountDetails(this.walletsignupService.walletAccountId);
    this.userObj.subscribe(
      data=>{
        this.user = data;
      }
    )
  }

  // deleteAccount(acnt){
  //   this.walletService.deleteBankAccount(acnt)
  //   .subscribe(data=>{
  //     this.doesNotHaveAccount=true;
  //     this.haveAccountData = false;
  //   });
  //   this.walletService.deleteBanktoWallet(this.walletsignupService.walletAccountId).subscribe(
  //     data=>{
  //       console.log(data);
  //     });
  // }
}
