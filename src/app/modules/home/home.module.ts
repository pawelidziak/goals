import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { GoalsModule } from '@modules/goals/goals.module';
import { BottomNavigationModule } from '@modules/bottom-navigation/bottom-navigation.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    GoalsModule,
    BottomNavigationModule
  ],
  declarations: [HomeComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
