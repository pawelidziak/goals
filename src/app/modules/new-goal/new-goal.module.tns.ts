import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NewGoalComponent } from '@modules/new-goal/new-goal.component';
import { NgrxFormsModule } from '@shared/components/ngrx-forms';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { registerElement } from 'nativescript-angular/element-registry';
import { GoalDeadlineValidator } from './models';

registerElement('GoalDeadlineValidator', () => <any>GoalDeadlineValidator);

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', component: NewGoalComponent }
    ]),
    NgrxFormsModule,
    TNSFontIconModule,
    NativeScriptUIDataFormModule
  ],
  declarations: [NewGoalComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NewGoalModule {}
