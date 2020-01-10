import { Goal } from './goal';

export class EmptyGoal extends Goal {
  constructor() {
    super('', 'a', new Date());
  }
}
