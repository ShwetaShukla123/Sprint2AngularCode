import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { BillDetails } from '../electricity-bill/BillDetails';

@Component({
  selector: 'app-electricity-register',
  templateUrl: './electricity-register.component.html',
  styleUrls: ['./electricity-register.component.css']
})
export class ElectricityRegisterComponent implements OnInit {

  BillDetails: BillDetails=new BillDetails();
  message:any;
  router: any;

  constructor(private service:WalletService) { }

  ngOnInit() {
  }
  

public registerNow(){
let resp=this.service.doRegistration(this.BillDetails);
resp.subscribe((data)=>this.message=data);
};
}
