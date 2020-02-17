import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { DropdownsFacade } from './../../dropdowns-facade';
import * as DeadlinesSelectors from './deadlines.selectors';
import * as DeadlinesActions from './deadlines.actions';
import { DeadlinesState } from './deadlines.reducer';
import { Deadline } from './deadlines.models';

@Injectable()
export class DeadlinesFacade implements DropdownsFacade {
  loaded$ = this.store.pipe(select(DeadlinesSelectors.getDeadlinesLoaded));
  items$ = this.store.pipe(select(DeadlinesSelectors.getAllDeadlines));
  selectedItem$ = this.store.pipe(select(DeadlinesSelectors.getSelected));

  constructor(private store: Store<DeadlinesState>) {}

  loadAll() {
    this.store.dispatch(DeadlinesActions.loadDeadlines());
  }

  selectItem(id: string) {
    this.store.dispatch(DeadlinesActions.selectDeadline({ id }));
  }

  getItemIndex(deadline: Deadline) {
    return this.store.pipe(select(DeadlinesSelectors.getDeadlineIndex(deadline)));
  }
}
