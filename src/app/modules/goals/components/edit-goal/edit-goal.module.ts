import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { APP_ROUTES } from '@core/routes';
import { GoalsFacade } from '@modules/goals/+state';
import { EditGoalResolver } from './edit-goal.resolver';
import { EditGoalComponent } from './edit-goal.component';
import { GoalDropdownsModule } from '@modules/goal-dropdowns/goal-dropdowns.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild([
      {
        path: APP_ROUTES.EDIT_GOAL,
        component: EditGoalComponent,
        resolve: { EditGoalResolver }
      }
    ]),
    NativeScriptUIDataFormModule,
    TNSFontIconModule,
    GoalDropdownsModule
  ],
  declarations: [EditGoalComponent],
  providers: [EditGoalResolver, GoalsFacade]
})
export class EditGoalModule {}
