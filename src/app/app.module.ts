import { WelcomeComponent } from '@src/app/welcome/welcome.component';
import { LoginComponent } from '@src/app/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { ListMoviesComponent } from '@src/app/list-movies/list-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
