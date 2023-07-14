import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/models/product";
import {ShopService} from "./shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  cards = [
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'},
    {title: 'Title 4', content: 'Content 4'}
  ];
  products: Product[] = [];

  constructor(private shopServise: ShopService) {
  }
  ngOnInit(): void {
    this.shopServise.getProducts().subscribe({
      next: res => this.products = res.data,
      error: err => console.log('err ', err),
    });
  }

}
