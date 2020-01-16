import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_ROUTES } from '@core/routes';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { CheckboxModule } from '@shared/components/checkbox/checkbox.module.tns';
import { GoalsListFacade } from './../player/+state/goals-list.facade';
import { ListMoviesComponent } from '@modules/list-movies/list-movies.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: APP_ROUTES.SETTINGS },
      { path: APP_ROUTES.SETTINGS, component: ListMoviesComponent }
    ]),
    NgRippleModule,
    NativeScriptUIListViewModule,
    CheckboxModule,
    TNSFontIconModule
  ],
  providers: [GoalsListFacade],
  declarations: [ListMoviesComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListMoviesModule {}
