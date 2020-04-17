import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { GoalDropdownsModule } from '@modules/goal-dropdowns/goal-dropdowns.module';
import { LayoutModule } from '@modules/layout/layout.module';
import { AddGoalModalComponent } from './add-goal-modal.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TNSFontIconModule,
    GoalDropdownsModule,
    LayoutModule,
  ],
  declarations: [AddGoalModalComponent],
  exports: [AddGoalModalComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddGoalModalModule {}
