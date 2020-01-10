import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Field, NgrxFormsFacade } from '@shared/components/ngrx-forms';
import { structure } from './consts/fields';
import { Goal, EmptyGoal } from './models';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
  // mobile
  private _goal: Goal;
  priorityProvider = [
    { key: 'a', label: 'A - High' },
    { key: 'b', label: 'B - Medium' },
    { key: 'c', label: 'C - Low' },
    { key: 'd', label: 'D - None' }
  ];

  // web
  structure$: Observable<Field[]>;
  data$: Observable<any>;

  constructor(
    private location: Location,
    private ngrxFormsFacade: NgrxFormsFacade
  ) {}

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this._goal = new EmptyGoal();
  }

  get goal(): Goal {
    return this._goal;
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  goBack() {
    this.location.back();
  }

  dfPropertyValidated(args) {
    const propertyName = args.propertyName;
    const validatedValue = args.entityProperty.valueCandidate;
    const validationResult = args.entityProperty.isValid;

    console.log(propertyName, validatedValue, validationResult);
    // updateText(propertyName, validatedValue, validationResult);
  }
  onPropertyCommitted(data) {
    console.log('onPropertyCommitted', data.object.editedObject);
  }

  onSave() {
    console.log(this.goal);
  }
}
