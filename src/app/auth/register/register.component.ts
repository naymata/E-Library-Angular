import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterRequestPayload } from './register-request.payload';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerRequestPayload!: RegisterRequestPayload;
  registerForm!: FormGroup;

  constructor(private authService: AuthService, private router:Router){


    this.registerRequestPayload={
      username:'',
      password:'',
      email:'',
      firstName:'',
      lastName:'',
      phoneNumber:''
    }
  }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        firstName: new FormControl('',Validators.required),
        lastName: new FormControl('',Validators.required),
        phoneNumber: new FormControl('',Validators.required)
    });
  }

  register(){
    this.registerRequestPayload.username = this.registerForm.get('username')?.value;
    this.registerRequestPayload.password = this.registerForm.get('password')?.value;
    this.registerRequestPayload.email = this.registerForm.get('email')?.value;
    this.registerRequestPayload.firstName = this.registerForm.get('firstName')?.value;
    this.registerRequestPayload.lastName = this.registerForm.get('lastName')?.value;
    this.registerRequestPayload.phoneNumber = this.registerForm.get('phoneNumber')?.value;
    this.authService.register(this.registerRequestPayload)
      .subscribe(data => {
        this.router.navigate(['/login'], {queryParams: {registered: 'true'}}).then();
      },error =>{console.log(error);});
  }

}
