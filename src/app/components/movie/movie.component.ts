import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  MovieListNavigate()
  {
      this.router.navigate(['movielist'], {relativeTo:this.route});
  }

  TicketListNavigate()
  {
    this.router.navigate(['ticket'], {relativeTo:this.route});

  }

}
