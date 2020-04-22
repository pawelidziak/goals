import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { NoGoalsComponent } from '@modules/goals/components/no-goals/no-goals.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TNSFontIconModule
  ],
  declarations: [NoGoalsComponent],
  providers: [],
  exports: [NoGoalsComponent],
})
export class NoGoalsModule {}
