import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {AuthService} from '../../auth.service';
import {AddCartRequestPayload} from "./add-cart-request.payload";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns = ['title', 'author', 'publisher', 'publishedOn', 'actions'];

  productList: any;
  addCartRequestPayload!: AddCartRequestPayload;
  ngOnInit(): void {
  }

  constructor(private cartService: CartService, private authService: AuthService,private route: Router) {
    this.cartService.getProducts().subscribe((data: any) => this.productList = data);
    this.addCartRequestPayload={
      username:this.authService.getUsername(),
      bookId:0
    }
  }

  removeAllCart() {
    this.cartService.removeAllCart();
  }

  removeItem(product: any) {
    this.cartService.removeCartItem(product);
  }


  addCart() {
    this.productList.forEach((book:any) => {
      this.addCartRequestPayload.bookId = book.id;
      this.cartService.addToCart(this.addCartRequestPayload).subscribe();
    });
    alert('Book`s purchased');
    this.route.navigate(['/books'])
      .then(r=>r);
  }
}
