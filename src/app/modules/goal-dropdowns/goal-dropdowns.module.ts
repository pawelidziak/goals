import { PrioritiesModule } from '@modules/goal-dropdowns/priorities/priorities.module.tns';
import { DeadlinesModule } from '@modules/goal-dropdowns/deadlines/deadlines.module.tns';
import { RepeatsModule } from '@modules/goal-dropdowns/repeats/repeats.module.tns';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [PrioritiesModule, DeadlinesModule, RepeatsModule],
  exports: [PrioritiesModule, DeadlinesModule, RepeatsModule],
  providers: [],
  schemas: []
})
export class GoalDropdownsModule {}
