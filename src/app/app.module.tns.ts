import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

// import firebase = require('nativescript-plugin-firebase');
import * as firebase from 'nativescript-plugin-firebase';

firebase
  .init()
  .then(() => console.log('>>>>>>>>> Firebase initialised!'))
  .catch(() => console.error('>>>>>>>>>> Firebase Error!'));

@NgModule({
  declarations: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    TNSFontIconModule.forRoot({
      fa: 'fonts/font-awesome.css',
      mdi: 'fonts/material-design-icons.css'
    }),
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
