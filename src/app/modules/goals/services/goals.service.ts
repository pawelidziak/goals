import { Injectable, NgZone } from '@angular/core';

import { firestore as firebaseNamespace } from 'nativescript-plugin-firebase';
import { firestore } from 'nativescript-plugin-firebase/app';
import { of, Observable } from 'rxjs';

import { Goal } from '@modules/goals/+state';

const USE_MOCK_DATA = false;

@Injectable()
export class GoalsService {
  constructor(private zone: NgZone) {}

  getAll(): Observable<Goal[]> {
    return USE_MOCK_DATA ? of(this.generateMockGoals(20)) : this.getGoals();
  }

  getGoals(): Observable<Goal[]> {
    return new Observable(subscriber => {
      const colRef: firebaseNamespace.CollectionReference = firestore().collection('goals');
      colRef.onSnapshot((snapshot: firebaseNamespace.QuerySnapshot) =>
        this.zone.run(() => {
          const goals = [];
          snapshot.forEach(docSnap =>
            goals.push({ id: docSnap.id, ...docSnap.data() })
          );
          subscriber.next(goals);
        })
      );
    });
  }

  addGoal(goal: Goal): Observable<string> {
    return new Observable(subscriber => {
      const colRef: firebaseNamespace.CollectionReference = firestore().collection('goals');
      colRef
        .add(goal)
        .then(doc => this.zone.run(() => subscriber.next(doc.id)))
    })
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
