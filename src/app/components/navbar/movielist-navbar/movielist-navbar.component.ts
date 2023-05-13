import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/sharedservice/shared.service';

@Component({
  selector: 'app-movielist-navbar',
  templateUrl: './movielist-navbar.component.html',
  styleUrls: ['./movielist-navbar.component.css']
})
export class MovielistNavbarComponent implements OnInit {

  signInUser:string;



  constructor(private _sharedService:SharedService) { }

  ngOnInit(): void {

    this.signInUser=this._sharedService.signInUserName;
  }

}
