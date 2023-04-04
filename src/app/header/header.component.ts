import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {CartService} from "../auth/user/cart/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn?: boolean;
  username?: string;
  totalItems?: number;
  constructor(private authService: AuthService, private router: Router,private cartService: CartService) {
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.authService.username.subscribe(username => this.username = username);
    this.cartService.getProducts().subscribe(products => this.totalItems = products.length);
  }

  goToUserProfile() {
    this.router.navigateByUrl('/profile').then(r => r);
  }

  goToAdminPanel() {
    this.router.navigateByUrl('/admin-panel').then(r => r);
  }

  isAdmin(): boolean {
    if (this.authService.getRole() == null) {
      return false;
    }
    return this.authService.getRole().includes("ADMIN");
  }

  isClient(): boolean {
    if (this.authService.getRole() == null) {
      return false;
    }
    return this.authService.getRole().includes("CLIENT");
  }

  showAbout(): boolean {
    return !!this.isLoggedIn;

  }

  goToCart() {
    this.router.navigateByUrl('/cart').then(r => r);
  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('').then(r => r);
  }
}
