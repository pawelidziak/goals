import { Component } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fonticon: TNSFontIconService) {
  }
}
