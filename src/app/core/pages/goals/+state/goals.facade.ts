import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromGoals from './goals.reducer';
import * as GoalsSelectors from './goals.selectors';
import * as GoalsActions from './goals.actions';

@Injectable()
export class GoalsFacade {
  loaded$ = this.store.pipe(select(GoalsSelectors.getGoalsLoaded));
  allGoals$ = this.store.pipe(select(GoalsSelectors.getAllGoals));
  selectedGoals$ = this.store.pipe(select(GoalsSelectors.getSelected));

  constructor(private store: Store<fromGoals.GoalsState>) {}

  loadAll() {
    this.store.dispatch(GoalsActions.loadGoals());
  }

  addGoal(name: string) {
    this.store.dispatch(GoalsActions.addGoal({ name }))
  }
}
