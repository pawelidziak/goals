import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Priority } from '../../add-goal/+state/add-goal.models';
import { GoalDropdownsBase } from '../goal-dropdowns.base';
import { AddGoalFacade } from '../../add-goal/+state/add-goal.facade';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriorityComponent extends GoalDropdownsBase implements OnInit {
  icon = 'mdi-priority-high';
  iconColors = ['#F44336', '#FF9800', '#2196F3', '#9E9E9E'];

  priorities: Priority[];
  items$: Observable<string[]> = this.addGoalFacade.priorities$.pipe(
    map(priorities => priorities.map(prority => prority.name))
  );

  constructor(private addGoalFacade: AddGoalFacade) {
    super();
  }

  ngOnInit() {
    this.getProrities();
  }

  getProrities() {
    this.unsubscribes$.add(
      this.addGoalFacade.priorities$.subscribe(
        (prorities: Priority[]) => (this.priorities = prorities)
      )
    );
  }

  onItemChanged = (index: number) =>
    this.addGoalFacade.selecPriority(this.priorities[index]);
}
