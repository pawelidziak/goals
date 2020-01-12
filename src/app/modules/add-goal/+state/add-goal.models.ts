export interface Deadline {
  id: string | number;
  name: string;
}

export interface Priority {
  id: string | number;
  name: string;
}

export interface Repeat {
  id: string | number;
  name: string;
}

export interface Goal {
  id: string | number;
  name: string;
  desc: string;
  priority: Priority;
  deadline: Deadline;
  repeat: Repeat;
}

export interface AddGoal {
  show: boolean;
  tfFocused: boolean;
  selectedDeadlineId: string | number;
  deadlines: Deadline[];
  priorities: Priority[];
  repeats: Repeat[];
  goal: Goal;
}
