import { Goal } from '@core/pages/goals/+state';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class GoalsService {
  getAll(): Observable<Goal[]> {
    return of(this.generateMockGoals(20));
  }

  private generateMockGoals(quantity: number): Goal[] {
    const res: Goal[] = [];
    for (let i = 1; i <= quantity; i++) {
      res.push({
        id: `${i}`,
        name: `Name ${i}`,
        desc: `Desc ${i}`,
        deadline: `Deadline ${i}`,
        repeat: `Repeat ${i}`,
        done: Math.random() >= 0.5,
        priority: this.getRandomPriority(i)
      });
    }

    return res;
  }

  private getRandomPriority(id: number) {
    const priorities = [
      { id: id, name: 'A - High', tag: 'A', color: '#F44336' },
      { id: id, name: 'B - Medium', tag: 'B', color: '#FF9800' },
      { id: id, name: 'C - Low', tag: 'C', color: '#2196F3' },
      { id: id, name: 'C - None', tag: 'D', color: '#9E9E9E' }
    ];

    return priorities[Math.floor(priorities.length * Math.random())];
  }
}
