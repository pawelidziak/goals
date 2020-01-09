import { Observable } from 'rxjs';
import { BottomNavigationFacade } from '@core/bottom-navigation/+state/bottom-navigation.facade';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field';
import { AddGoalFacade } from './+state/add-goal.facade';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGoalComponent implements OnInit, AfterViewInit {
  @ViewChild('addTextField', { static: false }) addTextField: ElementRef;
  showComponent$: Observable<boolean> = this.addGoalFacade.show$;
  newGoalTitle = '';

  ddItems = {
    priority: {
      icon: 'mdi-priority-high',
      iconColors: ['#F44336', '#FF9800', '#2196F3', '#9E9E9E'],
      items: ['A - High', 'B - Medium', 'C - Low', 'D - None']
    },
    deadline: {
      icon: 'mdi-date-range',
      iconColors: ['#F44336', '#FF9800', '#2196F3', '#9E9E9E'],
      items: ['Today', 'Tomorrow', 'Long-term', 'Todo']
    }
  };

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

    console.log('SEND');
    this.closeAdding();
  }
}
