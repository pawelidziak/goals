import { TabsModule } from './tabs/tabs.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { ListMoviesComponent } from '@src/app/list-movies/list-movies.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListMoviesComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    NativeScriptModule,
    TabsModule,
    AppRoutingModule,
    TNSFontIconModule.forRoot({
      'fa': 'fonts/font-awesome.css',
      'mdi': 'fonts/material-design-icons.css'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
