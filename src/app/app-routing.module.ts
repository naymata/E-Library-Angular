import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AdminBooksComponent } from "./auth/admin-panel/admin-books/admin-books.component";
import { AdminPanelComponent } from "./auth/admin-panel/admin-panel.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CartComponent } from './auth/user/cart/cart.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from "./books/books.component";
import { HomeComponent } from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import { UpdateBookComponent } from './books/update-book/update-book.component';
import {UpdateComponent} from "./auth/user/update/update.component";
import {UserComponent} from "./auth/user/user.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'update-user',component: UpdateComponent},
  {path:'profile',component: UserComponent},
  {path:'books', component:BooksComponent},
  {path:'add-book', component: AddBookComponent},
  {path:'book', component: BookComponent},
  {path:'update-book', component: UpdateBookComponent},
  {path:'admin-panel', component: AdminPanelComponent},
  {path:'admin-books', component: AdminBooksComponent},
  {path:'cart', component: CartComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
