import { Priority } from './priorities.models';
import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as PrioritiesSelectors from './priorities.selectors';
import * as PrioritiesActions from './priorities.actions';
import { PrioritiesState } from './priorities.reducer';

@Injectable()
export class PrioritiesFacade {
  loaded$ = this.store.pipe(select(PrioritiesSelectors.getPrioritiesLoaded));
  priorities$ = this.store.pipe(select(PrioritiesSelectors.getAllPriorities));
  selectedPriority$ = this.store.pipe(select(PrioritiesSelectors.getSelected));

  constructor(private store: Store<PrioritiesState>) {}

  loadAll() {
    this.store.dispatch(PrioritiesActions.loadPriorities());
  }

  selectPriority(id: string) {
    this.store.dispatch(PrioritiesActions.selectPriority({ id }));
  }

  getPriorityIndex(priority: Priority) {
    return this.store.pipe(select(PrioritiesSelectors.getPriorityIndex(priority)));
  }
}
