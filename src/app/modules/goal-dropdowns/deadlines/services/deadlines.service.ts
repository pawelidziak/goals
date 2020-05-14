import { Injectable, NgZone } from '@angular/core';

import { firestore as firebaseNamespace } from 'nativescript-plugin-firebase';
import { firestore } from 'nativescript-plugin-firebase/app';
import { Observable } from 'rxjs';

import { Deadline } from '../+state';

@Injectable()
export class DeadlinesService {
  constructor(private zone: NgZone) {}

  getDeadlines(): Observable<Deadline[]> {
    return new Observable(subscriber => {
      const colRef: firebaseNamespace.CollectionReference = firestore().collection(
        'deadlines'
      );
      colRef.onSnapshot((snapshot: firebaseNamespace.QuerySnapshot) =>
        this.zone.run(() => {
          const deadlines: Deadline[] = [];
          snapshot.forEach(docSnap => {
            const deadline = { id: docSnap.id, ...docSnap.data() as Deadline};
            deadline.timestamp = this.getTimestamp(deadline.name);
            deadlines.push(deadline)
          });
          subscriber.next(deadlines);
        })
      );
    });
  }
  
  // to refactor
 getTimestamp(name: string): number {
  switch(name.toLowerCase()) {
    case 'today':
      return new Date().setHours(0, 0, 0, 0);
    case 'tomorrow':
      return new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)
    default:
      return new Date().setHours(0, 0, 0, 0);
  }
}
}
