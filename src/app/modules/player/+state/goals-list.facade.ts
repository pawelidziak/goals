import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import * as fromGoalsList from './goals-list.reducer';
import * as GoalsListSelectors from './goals-list.selectors';
import * as GoalsListActions from './goals-list.actions';

@Injectable()
export class GoalsListFacade {
  loaded$ = this.store.pipe(select(GoalsListSelectors.getGoalsListLoaded));
  allGoalsList$ = this.store.pipe(select(GoalsListSelectors.getAllGoalsList));
  selectedGoalsList$ = this.store.pipe(select(GoalsListSelectors.getSelected));

  constructor(private store: Store<fromGoalsList.GoalsListState>) {}

  loadAll() {
    console.log('>>>>>>>>>>>>>> loadall')
    this.store.dispatch(GoalsListActions.loadGoalList());
  }
}
