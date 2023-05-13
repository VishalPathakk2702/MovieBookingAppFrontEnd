import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { SharedService } from 'src/app/services/sharedservice/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login=new Login('', '');



  @Input() parentData:string;


  constructor(public router:Router, private _sharedService:SharedService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {

  }

  CustomerLogin(dataa:any)
  {
    this._sharedService.login=dataa;
    console.log(dataa);
    this.router.navigate(['/movie']);
  
  }


}
