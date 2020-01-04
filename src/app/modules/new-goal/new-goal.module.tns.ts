import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NewGoalComponent } from '@modules/new-goal/new-goal.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            // { path: '', redirectTo: `${APP_ROUTES.PLAYERS}` },
            { path: ``, component: NewGoalComponent },
        ])
    ],
    declarations: [NewGoalComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NewGoalModule {}
