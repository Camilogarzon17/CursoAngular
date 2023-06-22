import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Products, CreateProductsDTO, UpdateProductDTO } from '../Models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) { }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset){
      params = params.set('limit',limit);
      params = params.set('offset',limit);
    }
    return this.http.get<Products[]>(this.apiUrl, { params });
  }
  getproduct(id: string) {
    return this.http.get<Products>(`${this.apiUrl}/${id}`);
  }

  getProductsBypage(limit: number, offset: number) {
    return this.http.get<Products[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    });
  }

  create(dto: CreateProductsDTO) {
    return this.http.post<Products>(this.apiUrl, dto);
  }

  update(id: string, dto: any) {
    return this.http.put<Products>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
