import { FloatBtnComponent } from '@shared/components/float-btn/float-btn.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgRippleModule } from 'nativescript-ng-ripple';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule, NgRippleModule],
  declarations: [FloatBtnComponent],
  exports: [FloatBtnComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FloatBtnModule {}
