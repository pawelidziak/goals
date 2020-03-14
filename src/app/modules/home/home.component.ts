import { Page } from 'tns-core-modules/ui/page';
import { goals } from './movies';
import { Component } from '@angular/core';
import { TabSelectedEventData, TabPressedEventData } from 'nativescript-material-bottomnavigationbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'goals';
  goals = goals;

  tabs: [
    { title: 'First'; icon: 'res://ic_home' },
    {
      title: 'Second';
      icon: 'res://ic_view_list';
      isSelectable: false;
    },
    { title: 'Third'; icon: 'res://ic_menu' }
  ];

  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }
  onItemTap(args): void {
    console.log('Item with index: ' + args.index + ' tapped');
  }

  onHomeTabTap(args): void {}

  onBottomNavigationTabSelected(event: TabSelectedEventData) {
    console.log('>>>>>>>>>>>>>onBottomNavigationTabSelected', event.newIndex);
  }
  onBottomNavigationTabPressed(event: TabPressedEventData) {
    console.log('>>>>>>>>>>>>>onBottomNavigationTabPressed', event.index);
  }
}
