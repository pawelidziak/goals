import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DropDownIconComponent } from './dropdown-icon.component';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NgRippleModule,
    DropDownModule,
    TNSFontIconModule
  ],
  declarations: [DropDownIconComponent],
  exports: [DropDownIconComponent],
  providers: [],
  schemas: []
})
export class DropDownIconModule {}
