import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    private readonly API = 'api/products'

  constructor(private http: HttpClient) { }

  list(){
      return this.http.get<Product[]>(this.API);
  }
}
