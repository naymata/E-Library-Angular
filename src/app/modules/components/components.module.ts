import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AboutComponent} from "../../about/about.component";
import {AppRoutingModule} from "../../app-routing.module";
import {AppComponent} from "../../app.component";
import {AdminBooksComponent} from "../../auth/admin-panel/admin-books/admin-books.component";
import {AdminPanelComponent} from "../../auth/admin-panel/admin-panel.component";
import {AuthComponent} from "../../auth/auth.component";
import {LoginComponent} from "../../auth/login/login.component";
import {RegisterComponent} from "../../auth/register/register.component";
import {CartComponent} from "../../auth/user/cart/cart.component";
import {UserComponent} from "../../auth/user/user.component";
import {AddBookComponent} from "../../books/add-book/add-book.component";
import {BookComponent} from "../../books/book/book.component";
import {BooksComponent} from "../../books/books.component";
import {HeaderComponent} from "../../header/header.component";
import {HomeComponent} from "../../home/home.component";
import {UIModule} from "../ui/ui.module";
import {UpdateBookComponent} from "../../books/update-book/update-book.component";
import {ServerSideModule} from "../server-side/server-side.module";
import {UpdateComponent} from "../../auth/user/update/update.component";
import {CartListComponent} from "../../auth/user/cart/cart-list/cart-list.component";
import {DeleteUserComponent} from "../../auth/user/delete-user/delete-user.component";

const component_array: any = [
  AppComponent,
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  BooksComponent,
  UserComponent,
  CartComponent,
  HeaderComponent,
  AboutComponent,
  BookComponent,
  AddBookComponent,
  AdminPanelComponent,
  AdminBooksComponent,
  HomeComponent,
  UpdateBookComponent,
  UpdateComponent,
  CartListComponent,
  DeleteUserComponent
];

const module_array: any = [
  AppRoutingModule,
  CommonModule,
  UIModule,
  ServerSideModule,
];

@NgModule({
  declarations: component_array,
  imports: [
    module_array
  ],
  exports: component_array
})
export class ComponentsModule {
}
