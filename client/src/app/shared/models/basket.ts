import { Guid } from "guid-typescript";

export interface Basket {
  id: string
  items: BasketItem[]
  deliveryMethodId: any
  clientSecret: any
  paymentIntentId: any
  shippingPrice: number
}

export interface BasketItem {
  id: number
  productName: string
  price: number
  quantity: number
  pictureUrl: string
  brand: string
  type: string
}

export class Basket implements Basket {
  id: string = Guid.create().toString();
  items: BasketItem[] = [];
  shippingPrice = 0;
}

export interface BasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
