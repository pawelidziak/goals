import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TeamsComponent } from './teams.component';
import { TeamDetailComponent } from './team-detail.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { APP_ROUTES } from '@core/routes';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: `${APP_ROUTES.TEAMS}` },
      { path: `${APP_ROUTES.TEAMS}`, component: TeamsComponent },
      { path: `${APP_ROUTES.TEAM_DETAIL}`, component: TeamDetailComponent }
    ])
  ],
  declarations: [TeamsComponent, TeamDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TeamsModule {}
