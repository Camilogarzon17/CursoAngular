import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { products } from '../../Models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() product: products = {
    id: '',
    price: 0,
    images: [],
    title: '',
    description:  '',
    category: {
      id: '',
      name: '',
    }
  };

  @Output() addedProduct = new EventEmitter<products>();
  @Output() showProduct = new EventEmitter<string>();

  constructor() {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }
}
