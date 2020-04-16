import { BottomNavigationComponent } from '@modules/bottom-navigation/bottom-navigation.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { StoreModule } from '@ngrx/store';
import * as fromBottomNavigation from './+state/bottom-navigation.reducer';
import { BottomNavigationFacade } from './+state/bottom-navigation.facade';
import { LayoutModule } from './../layout/layout.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([]),
    TNSFontIconModule,
    NgRippleModule,
    StoreModule.forFeature(
      fromBottomNavigation.BOTTOMNAVIGATION_FEATURE_KEY,
      fromBottomNavigation.reducer
    ),
    LayoutModule,
  ],
  declarations: [BottomNavigationComponent],
  exports: [BottomNavigationComponent],
  providers: [BottomNavigationFacade],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BottomNavigationModule {}
