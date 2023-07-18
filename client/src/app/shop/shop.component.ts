import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../shared/models/product";
import {ShopService} from "./shop.service";
import {Brand} from "../shared/models/brand";
import {Type} from "../shared/models/type";
import {Sort} from "../shared/models/sort";
import {PageEvent} from "@angular/material/paginator";
import {ShopParams} from "../shared/models/shopParams";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search') searchRef?: ElementRef;

  products: Product[] = [];

  brands: Brand[] = [];
  types: Type[] = [];
  shopParams: ShopParams = new ShopParams();
  totalCount = 0;

  sortOptions: Sort[] = [
    {title: 'By name', value: 'name'},
    {title: 'Price: Low to high', value: 'priceAsc'},
    {title: 'Price: High to low', value: 'priceDesc'},
  ];
  sortControl = new FormControl(this.sortOptions[0].value);

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): void {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: res => {
        this.products = res.data;
        this.shopParams.pageIndex = res.pageIndex;
        this.shopParams.pageSize = res.pageSize;
        this.totalCount = res.count;

        console.log('this.products ', this.products)
      },
      error: err => console.log('err ', err),
    });
  }

  getBrands(): void {
    this.shopService.getBrands().subscribe({
      next: res => this.brands = [{id: 0, name: 'All'}, ...res],
      error: err => console.log('err ', err),
    });
  }

  getTypes(): void {
    this.shopService.getTypes().subscribe({
      next: res => this.types = [{id: 0, name: 'All'}, ...res],
      error: err => console.log('err ', err),
    });
  }

  onBrandSelected(brandId: number): void {
    this.shopParams.brandId = brandId;
    this.shopParams.pageIndex = 0;
    this.getProducts();
  }

  onTypeSelected(typeId: number): void {
    this.shopParams.typeId = typeId;
    this.shopParams.pageIndex = 0;
    this.getProducts();
  }

  onSortSelected(sort: Sort): void {
    this.shopParams.sort = sort?.value;
    this.getProducts();
  }

  onPageChange(event: PageEvent): void {
    if (this.shopParams.pageIndex !== event.pageIndex) {
      this.shopParams.pageSize = event.pageSize;
      this.shopParams.pageIndex = event.pageIndex;
      this.getProducts();
    }
  }

  onSearch(): void {
    const params = this.shopService.getShopParams();
    params.search = this.searchRef?.nativeElement.value;
    params.pageIndex = 0;
    this.shopService.setShopParams(params);
    this.shopParams = params;
    this.getProducts();
  }
}
