import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { LoginNavbarComponent } from './components/navbar/login-navbar/login-navbar.component';
import { RegistrationNavbarComponent } from './components/navbar/registration-navbar/registration-navbar.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MovielistNavbarComponent } from './components/navbar/movielist-navbar/movielist-navbar.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieNavbarComponent } from './components/navbar/movie-navbar/movie-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    MovielistComponent,
    TicketComponent,
    LoginNavbarComponent,
    RegistrationNavbarComponent,
    MovielistNavbarComponent,
    MovieComponent,
    MovieNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
