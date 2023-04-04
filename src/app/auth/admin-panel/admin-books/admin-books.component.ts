import {Component, OnInit} from '@angular/core';
import {BookService} from 'src/app/books/book.service';
import {Book} from "../../../books/book";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {

  items?: any;


  constructor(private bookService: BookService,private router: Router) {
    this.getBooks();
  }

  displayedColumns = ['id', 'title', 'author', 'publisher', 'publishedOn','actions'];
  ngOnInit(): void {

  }
  editBook(book:Book){
    this.bookService._book = book;
    this.router.navigateByUrl('/update-book')
      .then(r => r);
  }
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(
      response=>{
        this.getBooks();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  getBooks() {
    return this.bookService.getBooks().subscribe((books: Book[]) => this.items = books);
  }

}
