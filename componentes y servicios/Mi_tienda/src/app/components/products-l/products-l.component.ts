import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { products, createProductsDTO } from '../../Models/Product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-l',
  templateUrl: './products-l.component.html',
  styleUrls: ['./products-l.component.scss'],
})
export class ProductsLComponent implements OnInit {
  myShopingCart: products[] = [];
  total = 0;
  product: products[] = [];
  showProductDetail = false;
  productChosen: products={
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
    category: {
      id: '',
      name: '',
    }
  };

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShopingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.product = data;
    });
  }

  onAddToshopingCart(product: products) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  onShowDetail(id: string){
    this.productsService.getproduct(id)
    .subscribe(data =>{
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

  createNewProduct(){
    const  products: createProductsDTO = {
      title: 'Nuevo producto',
      description: 'loren ipsun',
      images: ['https://placeimg.com/640/480/any?random=${Math.random()}'],
      price: 1000,
      categoryId: 2,
    }
    this.productsService.create(products)
    .subscribe(data => {
      this.product.unshift(data);
    });
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
}


