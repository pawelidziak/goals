import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line: component-selector
    selector: 'welcome-page',
    templateUrl: './welcome.component.tns.html'
})
export class WelcomeComponent {
    constructor(private routerExtension: RouterExtensions) { }

    onLogout() {
        // Navigate to login page with clearHistory
        this.routerExtension.navigate(['../login'], { clearHistory: true });
    }
}
