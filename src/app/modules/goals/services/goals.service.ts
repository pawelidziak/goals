import { Goal } from '@modules/goals/+state';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

const GOALS_LIST: Goal[] = [
  {
    id: '1',
    name: 'Name 1',
    desc: 'Desc 1',
    deadline: 'Deadline 1',
    priority: { id: '2', name: 'B - Medium', tag: 'B', color: '#FF9800' },
    repeat: 'Repeat 1',
    done: false
  },
  {
    id: '2',
    name: 'Name 2',
    desc: 'Desc 2',
    deadline: 'Deadline 2',
    priority: { id: '3', name: 'C - Low', tag: 'C', color: '#2196F3' },
    repeat: 'Repeat 2',
    done: true
  },
  {
    id: '3',
    name: 'Name 3',
    desc: 'Desc 3',
    deadline: 'Deadline 3',
    priority: { id: '1', name: 'A - High', tag: 'A', color: '#F44336' },
    repeat: 'Repeat 3',
    done: false
  }
];

@Injectable()
export class GoalsService {
  getAll(): Observable<Goal[]> {
    return of(GOALS_LIST);
  }
}
