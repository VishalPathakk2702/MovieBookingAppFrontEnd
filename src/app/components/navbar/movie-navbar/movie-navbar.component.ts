import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/sharedservice/shared.service';

@Component({
  selector: 'app-movie-navbar',
  templateUrl: './movie-navbar.component.html',
  styleUrls: ['./movie-navbar.component.css']
})
export class MovieNavbarComponent implements OnInit {
  signInUser:string;

  constructor(private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.signInUser=this._sharedService.signInUserName;

  }

}
