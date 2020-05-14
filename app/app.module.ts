import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { DisplayPassbookComponent } from './display-passbook/display-passbook.component';
import { HttpClientModule } from '@angular/common/http';
import { DthBillComponent } from './dth-bill/dth-bill.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { HeaderComponent } from './header/header.component';
import { ElectricityRegisterComponent } from './electricity-register/electricity-register.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferMoneyComponent,
    DefaultPageComponent,
    HomePageComponent,
    AddMoneyComponent,
    DisplayPassbookComponent,
    DthBillComponent,
    AddBankComponent,
    ElectricityBillComponent,
    SignupComponent,
    LoginComponent,
    BankDetailsComponent,
    HeaderComponent,
    ElectricityRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
