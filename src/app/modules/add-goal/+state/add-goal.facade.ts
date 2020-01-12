import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAddGoal from './add-goal.reducer';
import * as AddGoalSelectors from './add-goal.selectors';
import * as AddGoalActions from './add-goal.actions';
import { Priority, Deadline } from './add-goal.models';

@Injectable()
export class AddGoalFacade {
  show$ = this.store.select(AddGoalSelectors.getShow);
  tfFocused$ = this.store.select(AddGoalSelectors.getTfFocused);
  priorities$ = this.store.select(AddGoalSelectors.getPriorities);
  deadlines$ = this.store.select(AddGoalSelectors.getDeadlines);
  goal$ = this.store.select(AddGoalSelectors.getGoal);

  constructor(private store: Store<fromAddGoal.AddGoalState>) {}

  showAddGoal() {
    this.store.dispatch(AddGoalActions.showAddGoal());
  }

  hideAddGoal() {
    this.store.dispatch(AddGoalActions.hideAddGoal());
  }

  selectDeadline(deadline: Deadline) {
    this.store.dispatch(AddGoalActions.selectDeadline({ deadline: deadline }));
  }

  selecPriority(priority: Priority) {
    this.store.dispatch(AddGoalActions.selectPriority({ priority: priority }));
  }
}
