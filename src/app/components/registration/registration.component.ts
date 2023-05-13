import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/classes/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration =new Registration('', '', '', '', 0, '');


  constructor() { }

  ngOnInit(): void {
  }

  RegisterCustomer(data:any)
  {

  }

  onSubmit()
  {

  }


}
