import { BottomNavigationModule } from './../bottom-navigation/bottom-navigation.module';
import { GoalsModule } from './../goals/goals.module';
import { HomeComponent } from '@src/app/home/home.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptMaterialBottomNavigationBarModule} from 'nativescript-material-bottomnavigationbar/angular';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    NativeScriptMaterialBottomNavigationBarModule,
    GoalsModule,
    BottomNavigationModule
  ],
  declarations: [HomeComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
