import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EventEmitter, Injectable, Output} from '@angular/core';
import {apiUrl} from "src/main";
import {LoginRequestPayload} from "./login/login-request.payload";
import {RegisterRequestPayload} from './register/register-request.payload';
import {LoginResponsePayload} from "./login/login-response.payload";
import {LocalStorageService} from "ngx-webstorage";
import {map, Observable} from "rxjs";
import {UpdateUserRequestPayload} from "./user/update/update-user.request.payload";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() username: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {
  }

  authUrl = apiUrl + 'auth';

  register(payload: RegisterRequestPayload) {
    return this.httpClient.post(this.authUrl + '/sign-up', payload);
  }

  login(payload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponsePayload>(this.authUrl + '/login', payload)
      .pipe(map(data => {
        this.localStorage.store('token', data.authenticationToken);
        this.localStorage.store('expires', data.expiresAt);
        this.localStorage.store('username', data.username);
        this.localStorage.store('role', data.role);
        this.isLoggedIn.emit(true);
        this.username.emit(data.username);
        return true;
      }));

  }
  deleteUser(username:String){
    return this.httpClient.delete(this.authUrl +`/delete/${username}`).subscribe(response=>{

    },error=>{
      console.log(error);
    });
  }

  logout() {
    this.httpClient.post(this.authUrl + '/logout', {headers: new HttpHeaders().set('Content-Type', 'application/json')});

    this.localStorage.clear('token');
    this.localStorage.clear('expires');
    this.localStorage.clear('username');
    this.localStorage.clear('role');
  }




  updateUser(payload:UpdateUserRequestPayload){
    return this.httpClient.put(this.authUrl + '/update',payload,{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }


  getUsername(): string {
    return this.localStorage.retrieve('username');
  }

  getRole(): string {
    return this.localStorage.retrieve('role');
  }
  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }
  isLogged(): boolean {
    return this.getJwtToken !=null;
  }
}
