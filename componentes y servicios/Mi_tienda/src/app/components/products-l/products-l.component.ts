import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Products, CreateProductsDTO, UpdateProductDTO } from '../../Models/Product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-l',
  templateUrl: './products-l.component.html',
  styleUrls: ['./products-l.component.scss'],
})
export class ProductsLComponent implements OnInit {
  myShopingCart: Products[] = [];
  total = 0;
  product: Products[] = [];
  showProductDetail = false;
  productChosen: Products = {
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
  limit = 8;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShopingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getProductsBypage(8, 0)
      .subscribe((data) => {
        this.product = data;
        this.offset += this.limit;
      });
  }

  onAddToshopingCart(product: Products) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  onShowDetail(id: string) {
    this.productsService.getproduct(id)
      .subscribe(data => {
        this.toggleProductDetail();
        this.productChosen = data;
      })
  }

  createNewProduct() {
    const products: CreateProductsDTO = {
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

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'New title',
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
      .subscribe(data => {
        //console.log('updated', data);
        const productIndex = this.product.findIndex(item => item.id === this.productChosen.id);
        this.product[productIndex] = data;
      });
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id)
      .subscribe(() => {
        const productIndex = this.product.findIndex(item => item.id === this.productChosen.id);
        this.product.splice(productIndex, 1);
        this.showProductDetail = false;

      });
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  loadMore() {
    this.productsService.getProductsBypage(this.limit, this.offset)
      .subscribe((data) => {
        this.product = this.product.concat(data);
        this.offset += this.limit;
      });
  }

  loadProducts() {
    this.productsService.getProductsBypage(this.limit, this.offset)
      .subscribe((data) => {
        this.product = data;
      });
  }

    loadNextPage() {
    this.offset += this.limit;
    this.loadProducts();
  }

  loadPreviousPage() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
    } else {
      this.offset = 0;
    }
    this.loadProducts();
  }

}


