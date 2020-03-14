import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { DeadlinesFacade } from '@modules/goal-dropdowns/deadlines/+state';
import { GoalsFacade, Goal } from '../../+state';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.scss']
})
export class EditGoalComponent implements OnInit {
  goal$: Observable<Goal> = this.goalsFacade.selectedGoal$;
  deadlinesProvider = {
    key: 'id',
    label: 'name',
    items: []
  };

  constructor(
    private location: Location,
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private goalsFacade: GoalsFacade,
    private deadlinesFacade: DeadlinesFacade
  ) {
    this.deadlinesFacade.items$.subscribe(res => {
      this.deadlinesProvider.items = res;
    });
  }

  ngOnInit() {
    // console.log('>>>', this.activeRoute);
    // this.activeRoute.params.forEach(params => {
    //   this.goalId = params['id'];
    // });

    // this.goalsFacade.selectedGoal$.subscribe(res => console.log('edit', res))
  }

  backTeams() {
    this.routerExtensions.back({ relativeTo: this.activeRoute });
  }

  goBack() {
    this.location.back();
  }

  dfPropertyValidated(args) {
    const propertyName = args.propertyName;
    const validatedValue = args.entityProperty.valueCandidate;
    const validationResult = args.entityProperty.isValid;

    console.log('>>>>>>>>>>>>', propertyName, validatedValue, validationResult);
    // updateText(propertyName, validatedValue, validationResult);
  }
  onPropertyCommitted(data) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA onPropertyCommitted', data.object.editedObject);
  }

  onSave() {
    console.log('save');
  }
}
