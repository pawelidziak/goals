import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { GoalsModule } from '@modules/goals/goals.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '@modules/layout/layout.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    GoalsModule,
    LayoutModule
  ],
  declarations: [HomeComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
