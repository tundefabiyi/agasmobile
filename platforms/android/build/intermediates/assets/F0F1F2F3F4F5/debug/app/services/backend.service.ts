import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";
export const cloudmessagesenderid = "505975544831";

export class BackendService {
  
  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }
  static get messagingtoken(): string {
    return getString("messagingtoken");
  }

  static set messagingtoken(theToken: string) {
    setString("messagingtoken", theToken);
  }
  static set email(theemail: string) {
      setString("email", theemail);
  }
  static get email(): string {
      return getString("email");
  }
}
