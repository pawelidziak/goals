import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { DropdownsFacade } from './../../dropdowns-facade';
import * as PrioritiesSelectors from './priorities.selectors';
import * as PrioritiesActions from './priorities.actions';
import { PrioritiesState } from './priorities.reducer';
import { Priority } from './priorities.models';

@Injectable()
export class PrioritiesFacade implements DropdownsFacade {
  loaded$ = this.store.pipe(select(PrioritiesSelectors.getPrioritiesLoaded));
  items$ = this.store.pipe(select(PrioritiesSelectors.getAllPriorities));
  selectedItem$ = this.store.pipe(select(PrioritiesSelectors.getSelected));

  constructor(private store: Store<PrioritiesState>) {}

  loadAll() {
    this.store.dispatch(PrioritiesActions.loadPriorities());
  }

  selectItem(id: string) {
    this.store.dispatch(PrioritiesActions.selectPriority({ id }));
  }

  getItemIndex(priority: Priority) {
    return this.store.pipe(select(PrioritiesSelectors.getPriorityIndex(priority)));
  }
}
