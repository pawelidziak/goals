import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { NgRippleModule } from 'nativescript-ng-ripple';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

import { GoalItemComponent } from './goal-item.component';
import { CheckboxModule } from '@shared/components/checkbox/checkbox.module.tns';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NgRippleModule,
    CheckboxModule,
    TNSCheckBoxModule,
    CheckboxModule
  ],
  providers: [],
  declarations: [GoalItemComponent],
  exports: [GoalItemComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GoalItemModule {}
