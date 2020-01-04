import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NewGoalComponent } from '@modules/new-goal/new-goal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild([
            // { path: '', redirectTo: `${APP_ROUTES.PLAYERS}` },
            { path: ``, component: NewGoalComponent },
        ])
    ],
    declarations: [NewGoalComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NewGoalModule {}
