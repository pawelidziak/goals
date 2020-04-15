import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAddGoal from './add-goal-modal.reducer';
import * as AddGoalModalSelectors from './add-goal-modal.selectors';
import * as AddGoalModalActions from './add-goal-modal.actions';

@Injectable()
export class AddGoalModalFacade {
  show$ = this.store.select(AddGoalModalSelectors.getShow);

  constructor(private store: Store<fromAddGoal.AddGoalState>) {}

  showAddGoal() {
    this.store.dispatch(AddGoalModalActions.showAddGoalModal());
  }

  hideAddGoal() {
    this.store.dispatch(AddGoalModalActions.hideAddGoalModal());
  }
}
