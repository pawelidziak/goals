import {
  Component,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  EventEmitter
} from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field';
import { Observable } from 'rxjs';

import { BottomNavigationFacade } from '@core/bottom-navigation/+state/bottom-navigation.facade';
import { AddGoalFacade } from '../+state/add-goal.facade';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGoalComponent implements OnInit, AfterViewInit {
  @ViewChild('addTextField', { static: false }) addTextField: ElementRef;
  @Output() onGoalSend: EventEmitter<any> = new EventEmitter();
  showComponent$: Observable<boolean> = this.addGoalFacade.show$;
  newGoalTitle = '';

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private addGoalFacade: AddGoalFacade
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.addGoalFacade.tfFocused$.subscribe(res => {
      const textField = <TextField>this.addTextField.nativeElement;
      if (res) {
        textField.focus();
      } else {
        textField.dismissSoftInput();
      }
    });
  }

  closeAdding() {
    this.newGoalTitle = '';
    this.addGoalFacade.hideAddGoal();
    this.bottomNavFacade.showBottomNav();
  }

  onSend() {
    if (!this.newGoalTitle) {
      return;
    }

    this.onGoalSend.emit(this.newGoalTitle);
    this.closeAdding();
  }
}
