import { Movie, movies, goals } from '../home/movies';
import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { isIOS } from 'tns-core-modules/platform';

import { RouterExtensions } from 'nativescript-angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

declare const UITableViewCellSelectionStyle;

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @Input() movies: any[] = goals;

  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private page: Page
  ) {
    // this.page.actionBarHidden = true;
  }

  ngOnInit() {}

  onItemLoading(args: any) {
    if (isIOS) {
      const iosCell = args.ios;
      iosCell.selectionStyle = UITableViewCellSelectionStyle.None;
    }
  }
  onItemTap(movieId: string): void {
    console.log('tap', movieId);
    // this.router.navigate([`/movie/${movieId}`]);
  }
}
