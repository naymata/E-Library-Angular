import {Injectable} from '@angular/core';
import {Book} from "./book";
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../main";
import {AddBookRequestPayload} from "./add-book/add-book-request.payload";
import {Observable} from "rxjs";
import {UpdateBookRequestPayload} from "./update-book/update-book-request.payload";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  bookUrl = apiUrl + 'book';

  _book?: Book;
  genres: string[] = ['ADVENTURE', 'HORROR', 'MUSIC', 'GEOGRAPHY', 'FINANCE', 'SCI-FI'];
  result: any[] = [];
  addGenres(e: any) {
    if (e.target.checked) {
      this.result.push(e.target.value);
    }
  }
  addBook(addBookRequestPayload: AddBookRequestPayload) {
    return this.httpClient.post(this.bookUrl + '/add-book', addBookRequestPayload);
  }
  getBooks(): Observable<Array<Book>> {
    return this.httpClient.get<Array<Book>>(this.bookUrl);
  }
  deleteBook(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.bookUrl +`/delete/${id}`);
  }
  updateBook(updateBookRequestPayload:UpdateBookRequestPayload){
    return this.httpClient.put(this.bookUrl +'/update', updateBookRequestPayload);
  }
}
