export interface Deadline {
  id: string | number;
  name: string;
}

export interface AddGoal {
  show: boolean;
  tfFocused: boolean;
  deadlines: Deadline[];
  selectedDeadlineId: string | number; 
}
