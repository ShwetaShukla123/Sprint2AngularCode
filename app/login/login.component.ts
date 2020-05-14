import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletsignupService } from '../walletsignup.service';
import { WalletUser } from '../WalletUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  walletUser: WalletUser = new WalletUser();
  userId: number;
  password: string;
  isValid : boolean;

  isRightUser: boolean = true;
  constructor(private router: Router,
    private walletsignupService: WalletsignupService) { }

  ngOnInit(): void {
    this.walletUser = new WalletUser();
  }

  onLogin(){
    this.walletUser.userId=this.userId;
    this.walletUser.password=this.password;

    this.walletsignupService.checkLoginDetails(this.walletUser).subscribe(
      data=>{
        if(data=="Login Successful"){
          this.isRightUser = true;
          this.isValid = true;
          this.walletsignupService.mapUserWallet(this.userId).subscribe(
            data=>{
              this.walletsignupService.walletAccountId = data;
              console.log(data)
            }, error=>{
              console.log(error);
            }
          )
          this.router.navigate(['/home']);
        }
        else if(data=="Invalid Password" || data=="Invalid UserId"){
          this.isRightUser = false;
        }
        else{
          this.isRightUser = true;
        }
      },
      error=>{
        console.log(error);
      }
    )
    
    
  }

  validate(){
    if(this.userId==undefined || this.password==undefined){
      this.isValid = false;
    }
    else{
      this.isValid = true;
      this.onLogin();
    }
  }

}
