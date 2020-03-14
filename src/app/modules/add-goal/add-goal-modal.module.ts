import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FloatBtnModule } from '@shared/components/float-btn/float-btn.module';
import { StoreModule } from '@ngrx/store';
import { AddGoalModalFacade } from './+state/add-goal-modal.facade';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AddGoalModalComponent } from './components/add-goal-modal.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { DropDownModule } from 'nativescript-drop-down/angular';
import * as fromAddGoal from './+state/add-goal-modal.reducer';
import { GoalDropdownsModule } from '@modules/goal-dropdowns/goal-dropdowns.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NgRippleModule,
    DropDownModule,
    TNSFontIconModule,
    FloatBtnModule,
    StoreModule.forFeature(
      fromAddGoal.ADDGOAL_FEATURE_KEY,
      fromAddGoal.reducer
    ),
    GoalDropdownsModule
  ],
  declarations: [AddGoalModalComponent],
  exports: [AddGoalModalComponent],
  providers: [AddGoalModalFacade],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddGoalModalModule {}
