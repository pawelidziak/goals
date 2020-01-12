import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DeadlinesComponent } from './deadlines.component';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule
  ],
  declarations: [DeadlinesComponent],
  exports: [DeadlinesComponent],
  providers: [],
  schemas: []
})
export class DeadlinesModule {}
