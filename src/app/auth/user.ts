import {RegisterRequestPayload} from "./register/register-request.payload";

export interface User extends RegisterRequestPayload{
  id?:number;

}
