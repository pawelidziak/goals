import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Field } from '@shared/components/ngrx-forms';
import { NgrxFormsFacade } from '@shared/components/ngrx-forms';
import { structure } from './consts/fields';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
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
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  goBack() {
    this.location.back();
  }
}
