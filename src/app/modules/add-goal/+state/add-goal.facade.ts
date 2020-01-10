import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAddGoal from './add-goal.reducer';
import * as AddGoalSelectors from './add-goal.selectors';
import * as AddGoalActions from './add-goal.actions';

@Injectable()
export class AddGoalFacade {
  show$ = this.store.select(AddGoalSelectors.getShow);
  tfFocused$ = this.store.select(AddGoalSelectors.getTfFocused);

  constructor(private store: Store<fromAddGoal.AddGoalState>) {}

  showAddGoal() {
    this.store.dispatch(AddGoalActions.showAddGoal());
  }

  hideAddGoal() {
    this.store.dispatch(AddGoalActions.hideAddGoal());
  }

  selectDeadline(deadlineId: string | number) {
    this.store.dispatch(AddGoalActions.selectDeadline({ id: deadlineId }));
  }
}
