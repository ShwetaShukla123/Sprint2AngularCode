import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { DisplayPassbookComponent } from './display-passbook/display-passbook.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';
import { DthBillComponent } from './dth-bill/dth-bill.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'; 
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ElectricityRegisterComponent } from './electricity-register/electricity-register.component';

const routes: Routes = [
  {path: '', redirectTo:'default', pathMatch:'full'},
  {path:'default', component:DefaultPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'add-money', component:AddMoneyComponent},
  {path:'bank-details', component:BankDetailsComponent},
  {path:'transfer-money', component:TransferMoneyComponent},
  {path:'add-bank', component:AddBankComponent},
  {path:'electricity-bill', component:ElectricityBillComponent},
  {path:'electricity-register', component:ElectricityRegisterComponent},
  {path:'display-passbook', component:DisplayPassbookComponent},
  {path:'dth-bill', component:DthBillComponent},
  {path:'signup', component:SignupComponent },
  {path:'login', component:LoginComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
