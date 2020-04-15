import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

import { ListGoalsComponent } from './list-goals.component';
import { GoalItemModule } from './goal-item/goal-item.module';
import { CheckboxModule } from '@shared/components/checkbox/checkbox.module.tns';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NgRippleModule,
    NativeScriptUIListViewModule,
    CheckboxModule,
    TNSFontIconModule,
    TNSCheckBoxModule,
    GoalItemModule,
  ],
  providers: [],
  declarations: [ListGoalsComponent],
  exports: [ListGoalsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListGoalsModule {}
