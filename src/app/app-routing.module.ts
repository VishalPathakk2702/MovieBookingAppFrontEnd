import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'movie', component:MovieComponent,
    children:[
      {
        path:'movielist', component:MovielistComponent
      },
      {
        path:'ticket', component:TicketComponent
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
