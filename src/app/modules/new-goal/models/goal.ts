export class Goal {
  private title: string;
  private description: string;
  private priority: string;
  private deadline: Date;

  constructor(
    title: string,
    description: string,
    priority: string,
    deadline: Date
  ) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
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
