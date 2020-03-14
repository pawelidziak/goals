import { Observable } from 'rxjs';

import { Priority } from './priorities/+state';
import { Deadline } from './deadlines/+state';
import { Repeat } from './repeats/+state';


export type itemType = Priority | Deadline | Repeat;


export interface DropdownsFacade {
  loaded$: Observable<boolean>;
  items$: Observable<itemType[]>;
  selectedItem$: Observable<itemType>;
  loadAll(): void;
  selectItem(id: string): void;
  getItemIndex(item: itemType): Observable<number>;
}
