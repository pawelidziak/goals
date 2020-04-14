import { APP_ROUTES } from '@core/routes';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { Page } from 'tns-core-modules/ui/page';
import { Goal } from '@modules/goals/+state';

@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.scss'],
})
export class ListGoalsComponent implements OnInit {
  @Input() goals: Goal[];
  @Input() filter: any;
  @Output() goalStateChange: EventEmitter<Goal> = new EventEmitter();

  constructor(private routerExtensions: RouterExtensions, private page: Page) {
    // this.page.actionBarHidden = true;
  }

  ngOnInit() {}

  public onLayoutTap(item) {
    console.log('onLayoutTap', item);
    this.routerExtensions.navigate(
      [APP_ROUTES.EDIT_GOAL.split('/')[0], item.id],
      {
        animated: true,
        transition: {
          name: 'slide',
          duration: 200,
          curve: 'ease',
        },
      }
    );
  }
}
