import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../../../+state';
import { GoalsFacade } from './../../../+state/goals.facade';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss'],
})
export class GoalItemComponent implements OnInit {
  @Input() goal: Goal;
  @Output() goalStateChanged: EventEmitter<Goal> = new EventEmitter();

  constructor(private goalsFacade: GoalsFacade) {}

  ngOnInit() {}

  onCheckedChanged = (isGoalDone: boolean) =>
    this.goalsFacade.doneUndoneGoal(this.goal.id, isGoalDone)
}
