import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;
  numberOfOrders = 0;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (productId) {
      this.shopService.getProduct(+productId).subscribe({
        next: product => this.product = product,
        error: error => console.log(error)
      })
    }
  }
}
