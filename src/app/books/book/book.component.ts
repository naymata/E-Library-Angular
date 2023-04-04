import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {CartService} from "../../auth/user/cart/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

   _book?: Book;

  constructor(private bookService: BookService,private cartService: CartService,private route:Router) {
  }

  ngOnInit(): void {
    this._book = this.bookService._book;
  }

  addToCart(book: any){
    this.cartService.addProductToCart(book);
    this.route.navigate(['/books']).then(r=>r);
  }
}
