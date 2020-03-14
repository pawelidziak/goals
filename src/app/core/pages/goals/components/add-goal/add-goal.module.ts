import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AddGoalModalModule } from '@src/app/modules/add-goal-modal/add-goal-modal.module';
import { AddGoalComponent } from './add-goal.component';
import { GoalsFacade } from '../../+state';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    AddGoalModalModule
  ],
  declarations: [AddGoalComponent],
  providers: [GoalsFacade],
  exports: [AddGoalComponent]
})
export class AddGoalModule {}
