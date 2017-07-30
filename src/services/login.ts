import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

  token: string;

  constructor(){
  }

  login(username: string, password: string){
    //service: moodle_mobile_app
    //http://ourvle.mona.uwi.edu/login/token.php?username=&password=&service=
  }

  getToken(){
    return this.token;
  }
}
