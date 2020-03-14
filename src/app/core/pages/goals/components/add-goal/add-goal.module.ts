import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AddGoalComponent } from './add-goal.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  declarations: [AddGoalComponent],
  providers: []
})
export class AddGoalModule {}
