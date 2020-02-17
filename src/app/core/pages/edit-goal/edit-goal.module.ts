import { NgModule, } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { APP_ROUTES } from '@core/routes';

import { EditGoalComponent } from './edit-goal.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild([
      { path: APP_ROUTES.EDIT_GOAL, component: EditGoalComponent }
    ]),
  ],
  declarations: [EditGoalComponent],
  providers: [],
})
export class EditGoalModule {}
