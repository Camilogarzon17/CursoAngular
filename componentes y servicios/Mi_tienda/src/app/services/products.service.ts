import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products, createProductsDTO } from '../Models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<products[]>(this.apiUrl);
  }
  getproduct(id: string){
    return this.http.get<products>(`${this.apiUrl}/${id}`);
  }

  create(dto: createProductsDTO ){
    return this.http.post<products>(this.apiUrl, dto);
  }

  update(id: string ,dto: any){
    return this.http.put<products>(`${this.apiUrl}/${id}`, dto);
  }
}
