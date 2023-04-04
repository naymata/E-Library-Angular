import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from "@angular/forms";
import {AddBookRequestPayload} from "./add-book-request.payload";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookRequestPayload!: AddBookRequestPayload;
  addBookForm !: FormGroup;
  result: any[] = this.bookService.result;
  genres: string[] = this.bookService.genres;

  constructor(private bookService: BookService, private router: Router) {
    this.addBookRequestPayload = {
      title: '',
      author: '',
      publishedOn: 0,
      publisher: '',
      price: '',
      genres: [],
    };
  }


  ngOnInit(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      publishedOn: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      genres: new FormArray([], Validators.required),
    })
  }

  addBook() {
    this.addBookRequestPayload.title = this.addBookForm.get('title')?.value;
    this.addBookRequestPayload.author = this.addBookForm.get('author')?.value;
    this.addBookRequestPayload.publishedOn = this.addBookForm.get('publishedOn')?.value;
    this.addBookRequestPayload.publisher = this.addBookForm.get('publisher')?.value;
    this.addBookRequestPayload.price = this.addBookForm.get('price')?.value;
    this.addBookRequestPayload.genres = this.result;
    this.bookService.addBook(this.addBookRequestPayload)
      .subscribe(data => {
        this.router.navigate(['/admin-panel'], {queryParams: {bookAdded: 'true'}}).then()
      }, error => {
        console.log(error);
      });
  }

  addGenres(e: any) {
   this.bookService.addGenres(e);
  }
}
