import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as DeadlinesSelectors from './deadlines.selectors';
import * as DeadlinesActions from './deadlines.actions';
import { DeadlinesState } from './deadlines.reducer';

@Injectable()
export class DeadlinesFacade {
  loaded$ = this.store.pipe(select(DeadlinesSelectors.getDeadlinesLoaded));
  deadlines$ = this.store.pipe(select(DeadlinesSelectors.getAllDeadlines));
  selectedPriority$ = this.store.pipe(select(DeadlinesSelectors.getSelected));

  constructor(private store: Store<DeadlinesState>) {}

  loadAll() {
    this.store.dispatch(DeadlinesActions.loadDeadlines());
  }

  selectDeadline(id: string) {
    this.store.dispatch(DeadlinesActions.selectDeadline({ id }));
  }
}
