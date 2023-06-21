import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Products } from '../../Models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() product: Products = {
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

  @Output() addedProduct = new EventEmitter<Products>();
  @Output() showProduct = new EventEmitter<string>();

  constructor() {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }
}
