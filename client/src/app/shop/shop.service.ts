import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/product";
import {Observable} from "rxjs";

@Injectable()
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Pagination<Product[]>> {
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products');
  }
}
