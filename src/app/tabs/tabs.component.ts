import { Page } from 'tns-core-modules/ui/page';
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "tabs-page",
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {
  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private page: Page
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.routerExtension.navigate(
      [{ outlets: { playerTab: ['players'], teamTab: ['teams'] } }],
      { relativeTo: this.activeRoute }
    );
  }
}
