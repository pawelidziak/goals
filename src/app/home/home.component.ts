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
  countries: { name: string; imageSrc: string }[] = [
    {
      name: 'Australia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/au.png'
    },
    {
      name: 'Belgium',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/be.png'
    },
    {
      name: 'Bulgaria',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/bg.png'
    },
    {
      name: 'Canada',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ca.png'
    },
    {
      name: 'Switzerland',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ch.png'
    },
    {
      name: 'China',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cn.png'
    },
    {
      name: 'Czech Republic',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cz.png'
    },
    {
      name: 'Germany',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/de.png'
    },
    {
      name: 'Spain',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/es.png'
    },
    {
      name: 'Ethiopia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/et.png'
    },
    {
      name: 'Croatia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hr.png'
    },
    {
      name: 'Hungary',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hu.png'
    },
    {
      name: 'Italy',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/it.png'
    },
    {
      name: 'Jamaica',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/jm.png'
    },
    {
      name: 'Romania',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ro.png'
    },
    {
      name: 'Russia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ru.png'
    },
    {
      name: 'United States',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/us.png'
    },
    {
      name: 'Australia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/au.png'
    },
    {
      name: 'Belgium',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/be.png'
    },
    {
      name: 'Bulgaria',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/bg.png'
    },
    {
      name: 'Canada',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ca.png'
    },
    {
      name: 'Switzerland',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ch.png'
    },
    {
      name: 'China',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cn.png'
    },
    {
      name: 'Czech Republic',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cz.png'
    },
    {
      name: 'Germany',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/de.png'
    },
    {
      name: 'Spain',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/es.png'
    },
    {
      name: 'Ethiopia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/et.png'
    },
    {
      name: 'Croatia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hr.png'
    },
    {
      name: 'Hungary',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hu.png'
    },
    {
      name: 'Italy',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/it.png'
    },
    {
      name: 'Jamaica',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/jm.png'
    },
    {
      name: 'Romania',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ro.png'
    },
    {
      name: 'Russia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ru.png'
    },
    {
      name: 'United States',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/us.png'
    }
  ];

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
