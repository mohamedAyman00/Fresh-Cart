import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }

  headers: any = { token: localStorage.getItem('eToken') };

  addToCart(productId: string): Observable<any> {


    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: productId },
      {
        headers: this.headers
      }
    );
  }

  getUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: this.headers
      }
    );
  }

  removeItem(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: this.headers
      }
    );
  }

  updateCartProduct(id: string, newCount: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: newCount
      }
      ,
      {
        headers: this.headers
      }
    );
  }

}
