import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookService} from '../book.service';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {UpdateBookRequestPayload} from "./update-book-request.payload";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  _book?: Book;
  updateBookForm!: FormGroup;
  updateBookPayload!: UpdateBookRequestPayload;

  genres: string[] = this.bookService.genres;

  constructor(private bookService: BookService, private route: Router) {
    this.updateBookPayload = {
      title:'',
      author: '',
      publishedOn: 0,
      publisher: '',
      price: '',
      genres: [],
    }
  }

  ngOnInit(): void {
    this._book = this.bookService._book;

    this.updateBookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      publishedOn: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      genres: new FormArray([], Validators.required),
    })

  }


  addGenres(e: any) {
    this.bookService.addGenres(e);
  }

  updateBook() {
    this.updateBookPayload.id = this._book?.id;
    this.updateBookPayload.title = this.updateBookForm.get('title')?.value;
    this.updateBookPayload.author = this.updateBookForm.get('author')?.value;
    this.updateBookPayload.publishedOn = this.updateBookForm.get('publishedOn')?.value;
    this.updateBookPayload.publisher = this.updateBookForm.get('publisher')?.value;
    this.updateBookPayload.price = this.updateBookForm.get('price')?.value;
    this.updateBookPayload.genres = this.bookService.result;

    this.bookService.updateBook(this.updateBookPayload).subscribe(data => {
      this.route.navigate(['/admin-panel'], {queryParams: {bookUpdate: 'true'}})
        .then(r => r);
    }, error => {
      console.log(error)
    });
  }
}
