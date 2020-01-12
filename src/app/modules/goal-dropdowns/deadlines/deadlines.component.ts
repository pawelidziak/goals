import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AddGoalFacade } from '../../add-goal/+state/add-goal.facade';
import { Deadline } from '../../add-goal/+state/add-goal.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GoalDropdownsBase } from '../goal-dropdowns.base';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeadlinesComponent extends GoalDropdownsBase implements OnInit {
  icon = 'mdi-date-range';
  iconColors = ['#3F51B5', '#009688', '#673AB7', '#795548'];

  deadlines: Deadline[];
  items$: Observable<string[]> = this.addGoalFacade.deadlines$.pipe(
    map(deadlines => deadlines.map(deadline => deadline.name))
  );

  constructor(private addGoalFacade: AddGoalFacade) {
    super();
  }

  ngOnInit() {
    this.getDeadlines();
  }

  getDeadlines() {
    this.unsubscribes$.add(
      this.addGoalFacade.deadlines$.subscribe(
        (deadlines: Deadline[]) => (this.deadlines = deadlines)
      )
    );
  }

  onItemChanged = (index: number) =>
    this.addGoalFacade.selectDeadline(this.deadlines[index]);
}
