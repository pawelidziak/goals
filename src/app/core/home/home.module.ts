import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { BottomNavigationModule } from '@core/bottom-navigation/bottom-navigation.module';
import { GoalsModule } from '@pages/goals/goals.module';

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
