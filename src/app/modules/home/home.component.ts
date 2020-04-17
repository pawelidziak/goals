import { Page } from 'tns-core-modules/ui/page';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutFacade } from '@modules/layout/+state/layout.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showNav$: Observable<boolean> = this.layoutFacade.isComponentShown('BOTTOM_NAV');
  title = 'goals';

  constructor(private page: Page, private layoutFacade: LayoutFacade) {
    this.page.actionBarHidden = true;
  }

}
