import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/product";
import {Observable} from "rxjs";
import {Brand} from "../shared/models/brand";
import {Type} from "../shared/models/type";
import {ShopParams} from "../shared/models/shopParams";

@Injectable()
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  shopParams = new ShopParams();

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams): Observable<Pagination<Product[]>> {
    let params = new HttpParams();

    if (shopParams.brandId > 0) {
      params = params.append('brandId', shopParams.brandId);
    }
    if (shopParams.typeId) {
      params = params.append('typeId', shopParams.typeId);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageIndex);
    params = params.append('pageSize', shopParams.pageSize);

    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', { params });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }

  getShopParams() {
    return this.shopParams;
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }
}
