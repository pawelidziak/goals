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
import { AddGoalModalFacade } from '../+state/add-goal-modal.facade';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal-modal.component.html',
  styleUrls: ['./add-goal-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGoalModalComponent implements OnInit, AfterViewInit {
  @ViewChild('addTextField', { static: false }) addTextField: ElementRef;
  @Output() onGoalSend: EventEmitter<any> = new EventEmitter();
  showComponent$: Observable<boolean> = this.addGoalModalFacade.show$;
  newGoalTitle = '';

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private addGoalModalFacade: AddGoalModalFacade
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.addGoalModalFacade.tfFocused$.subscribe(res => {
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
    this.addGoalModalFacade.hideAddGoal();
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
