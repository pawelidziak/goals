import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RepeatsComponent } from './repeats.component';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule
  ],
  declarations: [RepeatsComponent],
  exports: [RepeatsComponent],
  providers: [],
  schemas: []
})
export class RepeatsModule {}
