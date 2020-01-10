import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { GoalDdComponent } from './goal-dd/goal-dd.component';
import { FloatBtnModule } from '@shared/components/float-btn/float-btn.module';
import { StoreModule } from '@ngrx/store';
import { AddGoalFacade } from './+state/add-goal.facade';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AddGoalComponent } from './components/add-goal.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { DropDownModule } from 'nativescript-drop-down/angular';
import * as fromAddGoal from './+state/add-goal.reducer';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NgRippleModule,
    DropDownModule,
    TNSFontIconModule,
    FloatBtnModule,
    StoreModule.forFeature(fromAddGoal.ADDGOAL_FEATURE_KEY, fromAddGoal.reducer)
  ],
  declarations: [AddGoalComponent, GoalDdComponent],
  exports: [AddGoalComponent],
  providers: [AddGoalFacade],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddGoalModule {}
