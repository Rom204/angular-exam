import { Component, OnInit } from '@angular/core';
import { Customers, Tasks } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
customer_id: any;
selectedOptionChanged(arg0: any) {
throw new Error('Method not implemented.');
}
  myProds:Tasks[] = [];
  customers:Customers[]=[];
  selectedValue: any;

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: ''
  // });
  constructor(private prodSrv: ProductService) {
      prodSrv.getItems().subscribe(res => this.myProds = res)
      prodSrv.getCustomers().subscribe(res => this.customers = res)
  }
  
  onSubmit(info: string, created_at:any, customer_id:any ){
    console.log(info,created_at,customer_id)
    this.prodSrv.addItem({
      id: 0,
      info, 
      created_at, 
      customer_id, 
      status:0
    }).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myProds = res))
    
}


}
