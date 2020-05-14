import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletsignupService } from '../walletsignup.service';
import { WalletUser } from '../WalletUser';
import { WalletAccount } from './WalletAccount';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  walletUser : WalletUser = new WalletUser();

  constructor(private router: Router,
    private walletsignupService: WalletsignupService) {}

  userId: number;
  userName: string;
  password: string;
  phoneNumber: number;
  isValid : boolean = true;
  isNewUser: boolean = true;

  ngOnInit(): void {
    this.walletUser = new WalletUser();
  }

  signUp(){
    this.walletUser.userId = this.userId;
    this.walletUser.userName = this.userName;
    this.walletUser.password = this.password;
    this.walletUser.phoneNumber = this.phoneNumber;
    this.walletsignupService.createUser(this.walletUser).subscribe(
      data=>{
        if(data==false){
          this.isNewUser = false;
          console.log(data);
        }
        else{
          this.walletUser = new WalletUser();
          this.walletsignupService.createWalletAccount(this.userId).subscribe(
          data=>{
            this.walletsignupService.walletAccountId = data;
            console.log(data);
          }, error=>{
            console.log(error);
          } )
          alert("You are Registered Successfully");
          this.router.navigate(['/home']);
        }
      }, error=>{
        console.log(error);
      }
    )
  }

  validate(){
    if(this.userId==undefined || this.password==undefined || 
      this.phoneNumber==undefined || this.userName==undefined){
      this.isValid = false;
    }
    else{
      this.isValid = true;
      this.signUp();
    }
  }

}
