import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { StoreModule } from '@ngrx/store';

import { LayoutModule } from '@modules/layout/layout.module';
import * as fromBottomNavigation from './+state/bottom-navigation.reducer';
import { BottomNavigationFacade } from './+state/bottom-navigation.facade';
import { BottomNavigationComponent } from './bottom-navigation.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([]),
    StoreModule.forFeature(
      fromBottomNavigation.BOTTOMNAVIGATION_FEATURE_KEY,
      fromBottomNavigation.reducer
    ),
    TNSFontIconModule,
    NgRippleModule,
    LayoutModule,
  ],
  declarations: [BottomNavigationComponent],
  exports: [BottomNavigationComponent],
  providers: [BottomNavigationFacade],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BottomNavigationModule {}
