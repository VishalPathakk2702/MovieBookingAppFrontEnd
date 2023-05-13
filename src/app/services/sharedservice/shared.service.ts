import { Injectable } from '@angular/core';
import { Login } from 'src/app/classes/login';


@Injectable({
  providedIn: 'root'
})
export class SharedService {


  login=new Login('', '');

  signInUserName:string="Vishal";

  constructor() { }
}
