export class Goal {
  private title: string;
  private priority: string;
  private deadline: Date;

  constructor(
    title: string,
    priority: string,
    deadline: Date
  ) {
    this.title = title;
    this.priority = priority;
    this.deadline = deadline;
  }

  getTitle(): string {
    return this.title;
  }

  getPriority(): string {
    return this.priority;
  }

  getDeadline(): Date {
    return this.deadline;
  }

  isGoalCorrect(): boolean {
    // return this.title.trim() !== '' &&
    return true;
  }
}
