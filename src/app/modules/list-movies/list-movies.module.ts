import { ListMoviesComponent } from '@modules/list-movies/list-movies.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: 'movies' },
      { path: 'movies', component: ListMoviesComponent },
    ])
  ],
  declarations: [ListMoviesComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListMoviesModule {}
