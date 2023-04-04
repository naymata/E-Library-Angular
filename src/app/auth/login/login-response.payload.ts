export interface LoginResponsePayload{
  authenticationToken:string;
  expiresAt:Date;
  username:string;
  role:string;
}
