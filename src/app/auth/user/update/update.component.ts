import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UpdateUserRequestPayload} from "./update-user.request.payload";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm!: FormGroup;
  updateUserRequestPayload!: UpdateUserRequestPayload;

  constructor(private authService: AuthService, private router: Router) {
    this.updateUserRequestPayload = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      'password': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required),
    });
  }

  update() {
    this.updateUserRequestPayload.username = this.authService.getUsername();
    this.updateUserRequestPayload.password = this.updateForm.get('password')?.value;
    this.updateUserRequestPayload.firstName = this.updateForm.get('firstName')?.value;
    this.updateUserRequestPayload.lastName = this.updateForm.get('lastName')?.value;
    this.updateUserRequestPayload.phoneNumber = this.updateForm.get('phoneNumber')?.value;
    this.authService.updateUser(this.updateUserRequestPayload).subscribe(data => {
        this.router.navigate(['/']).then(r => r);
        alert('User updated successfully');
      }, error => {
        alert(error);
      }
    );
  }
}
