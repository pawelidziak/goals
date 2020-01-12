import { PriorityModule } from '@modules/goal-dropdowns/priority/priority.module.tns';
import { DeadlinesModule } from '@modules/goal-dropdowns/deadlines/deadlines.module.tns';
import { RepeatsModule } from '@modules/goal-dropdowns/repeats/repeats.module.tns';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [PriorityModule, DeadlinesModule, RepeatsModule],
  exports: [PriorityModule, DeadlinesModule, RepeatsModule],
  providers: [],
  schemas: []
})
export class GoalDropdownsModule {}
