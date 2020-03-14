import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { CheckboxModule } from '@shared/components/checkbox/checkbox.module.tns';
import { ListGoalsComponent } from './list-goals.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NgRippleModule,
    NativeScriptUIListViewModule,
    CheckboxModule,
    TNSFontIconModule
  ],
  providers: [],
  declarations: [ListGoalsComponent],
  exports: [ListGoalsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListGoalsModule {}
