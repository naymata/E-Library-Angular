import {Book} from "../../../books/book";
import {User} from "../../user";

export interface Cart{
  id?:number;
  book?:Book;
  user?:User;
  purchasedOn?:Date;
}
