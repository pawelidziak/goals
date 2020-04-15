import {
  Component,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  EventEmitter,
} from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field';

import { BottomNavigationFacade } from '@modules/bottom-navigation/+state/bottom-navigation.facade';
import { AddGoalModalFacade } from './+state/add-goal-modal.facade';

@Component({
  selector: 'app-add-goal-modal',
  templateUrl: './add-goal-modal.component.html',
  styleUrls: ['./add-goal-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddGoalModalComponent implements OnInit, AfterViewInit {
  @ViewChild('addTextField', { static: false }) addTextField: ElementRef;
  @Output() saveGoal: EventEmitter<any> = new EventEmitter();
  newGoalTitle = '';

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private addGoalModalFacade: AddGoalModalFacade
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const textField = <TextField>this.addTextField.nativeElement;
    textField.focus();
    // for the future
    // textField.dismissSoftInput() hides keyboard
  }

  closeAdding() {
    this.newGoalTitle = '';
    this.addGoalModalFacade.hideAddGoal();
    this.bottomNavFacade.showBottomNav();
  }

  onSend() {
    if (!this.newGoalTitle) {
      return;
    }

    this.saveGoal.emit(this.newGoalTitle);
    this.closeAdding();
  }
}
