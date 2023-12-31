import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Products } from '../Models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShopingCart: Products[] = [];
  private myCart = new BehaviorSubject<Products[]>([]);

  myCart$ = this.myCart.asObservable(); //un obserbable se define con un signo $ al final en el nombre de la variable

  constructor() {}

  addProduct(product: Products) {
    this.myShopingCart.push(product);
    this.myCart.next(this.myShopingCart);
  }

  getShoppingCart() {
    return this.myShopingCart;
  }

  getTotal() {
    return this.myShopingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
