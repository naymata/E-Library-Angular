import {Component, OnInit} from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "./book";
import {Router} from "@angular/router";
import { CartService } from '../auth/user/cart/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {
  items?: Array<Book>;

  ngOnInit(): void {
  }

  constructor(private bookService: BookService, private route: Router,private cartService: CartService) {
    this.bookService.getBooks().subscribe((books: Book[]) => this.items = books);
  }

  addToCart(book: Book) {
    this.cartService.addProductToCart(book);
  }

  goToBook(book: Book) {
    this.bookService._book = book;
    this.route.navigate(['book'])
      .then(r => r);
  }
}
