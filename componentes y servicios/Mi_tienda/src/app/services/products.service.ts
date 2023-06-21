import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products, CreateProductsDTO, UpdateProductDTO} from '../Models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Products[]>(this.apiUrl);
  }
  getproduct(id: string){
    return this.http.get<Products>(`${this.apiUrl}/${id}`);
  }

  create(dto: CreateProductsDTO ){
    return this.http.post<Products>(this.apiUrl, dto);
  }

  update(id: string ,dto: any){
    return this.http.put<Products>(`${this.apiUrl}/${id}`, dto);
  }
}
