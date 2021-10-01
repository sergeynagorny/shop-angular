import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api = environment.baseURL
  public products: BehaviorSubject<any>

  constructor(private http: HttpClient) {
    this.products = new BehaviorSubject({})
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.api}/products`)
  }

  getProductById(id: string | number): Observable<any>  {
    return this.getProducts().pipe(map((products: any) => {
      return products.find((p: any) => p.sku == id)
    }))
  }
}
