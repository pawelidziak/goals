import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAddGoal from './add-goal-modal.reducer';
import * as AddGoalModalSelectors from './add-goal-modal.selectors';
import * as AddGoalModalActions from './add-goal-modal.actions';
import { Priority, Deadline, Repeat } from './add-goal-modal.models';

@Injectable()
export class AddGoalModalFacade {
  show$ = this.store.select(AddGoalModalSelectors.getShow);
  tfFocused$ = this.store.select(AddGoalModalSelectors.getTfFocused);
  priorities$ = this.store.select(AddGoalModalSelectors.getPriorities);
  deadlines$ = this.store.select(AddGoalModalSelectors.getDeadlines);
  repeats$ = this.store.select(AddGoalModalSelectors.getRepeats);
  goal$ = this.store.select(AddGoalModalSelectors.getGoal);

  constructor(private store: Store<fromAddGoal.AddGoalState>) {}

  showAddGoal() {
    this.store.dispatch(AddGoalModalActions.showAddGoalModal());
  }

  hideAddGoal() {
    this.store.dispatch(AddGoalModalActions.hideAddGoalModal());
  }

  selectDeadline(deadline: Deadline) {
    this.store.dispatch(AddGoalModalActions.selectDeadline({ deadline: deadline }));
  }

  selectPriority(priority: Priority) {
    this.store.dispatch(AddGoalModalActions.selectPriority({ priority: priority }));
  }

  selectRepeat(repeat: Repeat) {
    this.store.dispatch(AddGoalModalActions.selectRepeat({ repeat: repeat }));
  }
}
