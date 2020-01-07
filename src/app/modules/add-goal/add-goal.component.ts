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
  @Output() stopAdding: EventEmitter<any> = new EventEmitter();
  showComponent$: Observable<boolean> = this.addGoalFacade.show$;
  newGoal = '';

  ddItems = {
    priority: {
      icon: 'mdi-priority-high',
      items: ['A - Hight', 'B - Medium', 'C - Low', 'D - None']
    },
    deadline: {
      icon: 'mdi-bookmark',
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

  onReturnPress(e: any) {
    this.stopAdding.emit(true);
    this.newGoal = '';
    this.addGoalFacade.hideAddGoal();
    this.bottomNavFacade.showBottomNav();
  }
}
