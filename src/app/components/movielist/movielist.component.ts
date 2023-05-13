import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/classes/login';
import { SharedService } from 'src/app/services/sharedservice/shared.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  login=new Login('', '');

  constructor(private _sharedService:SharedService) { }
 
  movies:[];

  ngOnInit(): void {
    
    this.login=this._sharedService.login;

    console.log("movielistComponent "+this.login.email);

    
  }

}
