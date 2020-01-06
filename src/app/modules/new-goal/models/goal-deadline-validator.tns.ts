import { PropertyValidator } from 'nativescript-ui-dataform';

export class GoalDeadlineValidator extends PropertyValidator {
  constructor() {
    super();
    this.errorMessage = 'Please enter a date later than today.';
  }

  public validate(value: any, propertyName: string): boolean {
    const givenDate = new Date(value);
    givenDate.setHours(0, 0, 0, 0);
    const givenTime = givenDate.getTime();
    
    const nowDate = new Date();
    nowDate.setHours(0, 0, 0, 0);
    const nowTime = nowDate.getTime();
    return value && givenTime >= nowTime;
  }
}
