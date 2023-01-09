import { Component, OnInit } from '@angular/core';
import { Product, Tasks } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  myProds:Tasks[] = []
  constructor(prodSrv: ProductService) {
      prodSrv.getItems().subscribe(res => this.myProds = res)
  }
}
