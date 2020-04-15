import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { AllDoneComponent } from '@modules/goals/components/all-done/all-done.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TNSFontIconModule
  ],
  declarations: [AllDoneComponent],
  providers: [],
  exports: [AllDoneComponent],
})
export class AllDoneModule {}
