import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromGoals from './goals.reducer';
import * as GoalsSelectors from './goals.selectors';
import * as GoalsActions from './goals.actions';
import { Goal } from './goals.models';

@Injectable()
export class GoalsFacade {
  loaded$ = this.store.pipe(select(GoalsSelectors.getGoalsLoaded));
  allGoals$ = this.store.pipe(select(GoalsSelectors.getAllGoals));
  doneGoals$ = this.store.pipe(select(GoalsSelectors.getDoneGoals));
  undoneGoals$ = this.store.pipe(select(GoalsSelectors.getUndoneGoals));
  selectedGoal$ = this.store.pipe(select(GoalsSelectors.getSelected));
  filteredGoals$ = this.store.pipe(select(GoalsSelectors.getFilteredGoals));

  constructor(private store: Store<fromGoals.GoalsState>) {}

  loadAll() {
    this.store.dispatch(GoalsActions.loadGoals());
  }

  addGoal(name: string) {
    this.store.dispatch(GoalsActions.addGoal({ name }));
  }

  selectGoal(id: string) {
    this.store.dispatch(GoalsActions.selectGoal({ id }));
  }

  filterGoals(filter: any) {
    this.store.dispatch(GoalsActions.filterGoals({ filter }));
  }

  editGoal(goal: Goal) {
    this.store.dispatch(GoalsActions.editGoal({ goal }));
  }

  doneUndoneGoal(id: string, isGoalDone: boolean) {
    isGoalDone ? this.doneGoal(id) : this.undoneGoal(id);
  }

  private doneGoal(id: string) {
    this.store.dispatch(GoalsActions.doneGoal({ id }));
  }

  private undoneGoal(id: string) {
    this.store.dispatch(GoalsActions.undoneGoal({ id }));
  }
}
