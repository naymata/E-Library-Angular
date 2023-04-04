import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AddCartRequestPayload} from "./add-cart-request.payload";
import {apiUrl} from "../../../../main";
import {BehaviorSubject, Observable} from "rxjs";
import {Cart} from "./cart";
import {CartUserRequestPayload} from "./cart-list/cart-request.payload";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUtl = apiUrl + 'cart';

  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {

  }

  addToCart(addCartRequestPayload: AddCartRequestPayload): Observable<void> {
    return this.http.post<void>(this.cartUtl + '/add', addCartRequestPayload);
  }

  getCart(cartUserRequestPayload: CartUserRequestPayload): Observable<Array<Cart>> {
    return this.http.post<Array<Cart>>(this.cartUtl + '/get-cart', cartUserRequestPayload);
  }

  getProducts() {
    return this.productList.asObservable();
  }

  addProductToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }

  setProducts(i: any) {
    this.cartItemList.push(...i);
    this.productList.next(i);
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
