import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {AuthService} from "../../../auth.service";
import {CartUserRequestPayload} from "./cart-request.payload";
import {Cart} from "../cart";
import {DatePipe} from "@angular/common";
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit{


  displayedColumns:any=['name','publishedOn','publisher','purchasedOn'];

  items?:any;

  cartUserRequestPayload!: CartUserRequestPayload;
  ngOnInit(): void {  }

  constructor(private cartService: CartService,private authService: AuthService) {
    this.cartUserRequestPayload={
      username:this.authService.getUsername()
    }
    this.cartService.getCart(this.cartUserRequestPayload).subscribe(data=> this.items=data);
  }

  convertInstantToDate(datetime:any){
    let pipe = new DatePipe("en-US");
    const date = pipe.transform(datetime,'MM/dd/YYYY','UTC');
    return date;
  }
}
