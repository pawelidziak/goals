import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GoalsFacade } from '../../+state';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddGoalComponent implements OnInit {
  constructor(private goalsFacade: GoalsFacade) {}

  ngOnInit() {}

  onSaveGoal(name: string) {
    this.goalsFacade.addGoal(name);
  }
}
