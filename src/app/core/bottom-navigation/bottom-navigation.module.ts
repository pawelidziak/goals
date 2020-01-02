import { BottomNavigationComponent } from '@core/bottom-navigation/bottom-navigation.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NgRippleModule } from 'nativescript-ng-ripple';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([]),
    TNSFontIconModule,
    NgRippleModule
  ],
  declarations: [BottomNavigationComponent],
  exports: [BottomNavigationComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BottomNavigationModule {
}
