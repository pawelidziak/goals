import { Goal } from './+state/goals-list.models';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

const GOALS_LIST: Goal[] = [
  {
    id: '1',
    name: 'Name 1',
    desc: 'Desc 1',
    deadline: 'Deadline 1',
    priority: 'Priority 1',
    repeat: 'Repeat 1'
  },
  {
    id: '2',
    name: 'Name 2',
    desc: 'Desc 2',
    deadline: 'Deadline 2',
    priority: 'Priority 2',
    repeat: 'Repeat 2'
  },
  {
    id: '3',
    name: 'Name 3',
    desc: 'Desc 3',
    deadline: 'Deadline 3',
    priority: 'Priority 3',
    repeat: 'Repeat 3'
  }
];

@Injectable()
export class GoalsListService {
  getAll(): Observable<Goal[]> {
    return of(GOALS_LIST);
  }
}
