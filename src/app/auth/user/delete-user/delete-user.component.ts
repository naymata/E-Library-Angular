import {Component, OnInit} from '@angular/core';
import {User} from "../../user";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) {
  }

  ngOnInit(): void {
  }

  deleteUser(){
    this.authService.deleteUser(this.authService.getUsername());
    this.authService.logout();
    this.route.navigate(['/']).then(r=>r);
  }
}
