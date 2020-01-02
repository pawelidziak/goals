import { ListMoviesComponent } from '@modules/list-movies/list-movies.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { APP_ROUTES } from '@core/routes';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: APP_ROUTES.SETTINGS },
      { path: APP_ROUTES.SETTINGS, component: ListMoviesComponent },
    ])
  ],
  declarations: [ListMoviesComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListMoviesModule {}
