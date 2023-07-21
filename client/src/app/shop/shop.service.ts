import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/product";
import {Observable} from "rxjs";
import {Brand} from "../shared/models/brand";
import {Type} from "../shared/models/type";
import {ShopParams} from "../shared/models/shopParams";
import {environment} from "../../environments/environment";

@Injectable()
export class ShopService {
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

    return this.http.get<Pagination<Product[]>>(environment.apiUrl + 'products', { params });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + 'products/' + id);
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(environment.apiUrl + 'products/brands');
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(environment.apiUrl + 'products/types');
  }

  getShopParams() {
    return this.shopParams;
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }
}
