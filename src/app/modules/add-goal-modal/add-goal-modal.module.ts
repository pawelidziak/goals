import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { StoreModule } from '@ngrx/store';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { GoalDropdownsModule } from '@modules/goal-dropdowns/goal-dropdowns.module';
import { LayoutModule } from '@modules/layout/layout.module';
import { AddGoalModalFacade } from './+state/add-goal-modal.facade';
import { AddGoalModalComponent } from './add-goal-modal.component';
import * as fromAddGoal from './+state/add-goal-modal.reducer';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    StoreModule.forFeature(
      fromAddGoal.ADDGOAL_FEATURE_KEY,
      fromAddGoal.reducer
    ),
    TNSFontIconModule,
    GoalDropdownsModule,
    LayoutModule
  ],
  declarations: [AddGoalModalComponent],
  exports: [AddGoalModalComponent],
  providers: [AddGoalModalFacade],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddGoalModalModule {}
