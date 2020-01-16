import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { Observable } from 'rxjs';
import {
  ListViewEventData,
  SwipeActionsEventData
} from 'nativescript-ui-listview';

import { GoalsListFacade } from './../player/+state/goals-list.facade';
import { Goal } from '../player/+state/goals-list.models';
import { Page, View } from 'tns-core-modules/ui/page';
import { layout } from 'tns-core-modules/utils/utils';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  goals$: Observable<Goal[]>;
  private lastX = 0;
  private swipeLeft = false;

  swipeRightMethodText = '';

  swipeRight = {
    text: 'priority',
    icon: '',
    bgColor: '#FFC107',
    lastX: 0,
    method: null
  };

  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private page: Page,
    private facade: GoalsListFacade
  ) {
    // this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.goals$ = this.facade.allGoalsList$;
  }

  public onCellSwiping(args: SwipeActionsEventData) {
    const swipeView = args.swipeView;
    // jesli przeciagne powyzej 1/4 to przestaw flage.
    // Po zakonczeniu przeciagania uruchom akcje
    // if (args.data.x > 50) {
    //   console.log('Notify perform left action');
    //   this.swipeLeft = true;
    //   this.swipeRight.text = 'done';
    // } else if (args.data.x < -50 && args.data.x > -250) {
    //   this.swipeRight.icon = 'mdi-priority-high';
    //   this.swipeRight.text = 'priority';
    //   this.swipeRight.bgColor = '#FFC107';

    //   console.log('Notify perform right action');
    // } else if (args.data.x < -250) {
    //   this.swipeRight.icon = 'mdi-date-range';
    //   this.swipeRight.text = 'deadline';
    //   this.swipeRight.bgColor = '#03A9F4';
    //   console.log('Notify perform right action 2');
    // }

    // TO LEFT (RIGHT ACTIONS)
    if (args.data.x < this.swipeRight.lastX) {
      if (args.data.x < -50 && args.data.x > -400) {
        this.swipeRight.icon = 'mdi-priority-high';
        this.swipeRight.text = 'priority';
        this.swipeRight.bgColor = '#FFC107';
      } else if (args.data.x < -400) {
        this.swipeRight.icon = 'mdi-date-range';
        this.swipeRight.text = 'deadline';
        this.swipeRight.bgColor = '#03A9F4';
      }
    }

    // TO RIGHT (LEFT ACTIONS)
    if (args.data.x > this.swipeRight.lastX) {
      if (args.data.x > 50) {
        this.swipeRight.text = 'done';
      }
    }

    this.swipeRight.lastX = args.data.x;
    const mainView = args.mainView;

    const leftItem = swipeView.getViewById<View>('mark-view');
    const rightItem = swipeView.getViewById<View>('delete-view');
    if (args.data.x > 0) {
      const leftDimensions = View.measureChild(
        <View>leftItem.parent,
        leftItem,
        layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
        layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY)
      );
      View.layoutChild(
        <View>leftItem.parent,
        leftItem,
        0,
        0,
        leftDimensions.measuredWidth,
        leftDimensions.measuredHeight
      );
    } else {
      // const rightDimensions = View.measureChild(
      //   <View>rightItem.parent,
      //   rightItem,
      //   layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
      //   layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY)
      // );

      // View.layoutChild(
      //   <View>rightItem.parent,
      //   rightItem,
      //   mainView.getMeasuredWidth() - rightDimensions.measuredWidth,
      //   0,
      //   mainView.getMeasuredWidth(),
      //   rightDimensions.measuredHeight
      // );
    }
  }

  public onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.object;
    // swipeLimits.left = swipeView.getMeasuredWidth() / 2;
    // swipeLimits.left = swipeLimits.right =
    //   args.data.x > 0
    //     ? swipeView.getMeasuredWidth() / 2
    //     : swipeView.getMeasuredWidth() / 2;
    // swipeLimits.threshold = swipeView.getMeasuredWidth();

    // console.log(swipeView.getMeasuredWidth())
    const leftItem = swipeView.getViewById<View>('mark-view');
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = swipeView.getMeasuredWidth() / 2;
    swipeLimits.threshold = swipeView.getMeasuredWidth();
    // swipeLimits.threshold = leftItem.getMeasuredWidth() + 1;
  }

  public onSwipeCellFinished(args: ListViewEventData) {
    console.log(this.swipeRight.text);
    // if (this.swipeLeft) {
    //   console.log('Perform left action');
    // } else if (this.rightThresholdPassed) {
    //   console.log('Perform right action');
    // }
  }

  public onLayoutTap(args) {
    console.log('onLayoutTap');
  }

  /**
   * if there is possibility to click on swipes
    public onSwipeCellStarted(args: ListViewEventData) {
      const swipeLimits = args.data.swipeLimits;
      const swipeView = args.object;
      const leftItem = swipeView.getViewById<View>('mark-view');
      const rightItem = swipeView.getViewById<View>('delete-view');
      swipeLimits.left = leftItem.getMeasuredWidth();
      swipeLimits.right = rightItem.getMeasuredWidth();
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }
    public onLeftSwipeClick(args: ListViewEventData) {
      console.log('Left swipe click');
      // @ViewChild('myListView', { read: RadListViewComponent, static: false }) myListViewComponent: RadListViewComponent;
      this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
      console.log('Right swipe click');
    }
  **/
}
