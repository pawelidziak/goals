import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PriorityComponent } from './priority.component';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule
  ],
  declarations: [PriorityComponent],
  exports: [PriorityComponent],
  providers: [],
  schemas: []
})
export class PriorityModule {}
