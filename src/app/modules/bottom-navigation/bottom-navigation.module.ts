import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NgRippleModule } from 'nativescript-ng-ripple';

import { LayoutModule } from '@modules/layout/layout.module';
import { BottomNavigationComponent } from './bottom-navigation.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    TNSFontIconModule,
    NgRippleModule,
    LayoutModule,
  ],
  declarations: [BottomNavigationComponent],
  exports: [BottomNavigationComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BottomNavigationModule {}
