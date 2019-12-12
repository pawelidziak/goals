import { Movie, movies } from "../home/movies";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Page } from "tns-core-modules/ui/page";
import { screen, isIOS } from "tns-core-modules/platform";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view";
import {
  PanGestureEventData,
  GestureStateTypes,
  GestureEventData
} from "tns-core-modules/ui/gestures";
import { registerElement } from "nativescript-angular/element-registry";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

declare const UITableViewCellSelectionStyle;

@Component({
  selector: "app-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.scss"]
})
export class ListMoviesComponent implements OnInit {
  @Input() movies: Movie[] = movies;

  onItemTap(movieId: string): void {
    console.log("tap", movieId);
    // this.router.navigate([`/movie/${movieId}`]);
  }

  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private page: Page
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.routerExtension.navigate(
      [{ outlets: { goalsTab: ["players"], teamTab: ["teams"] } }],
      { relativeTo: this.activeRoute }
    );
  }

  onItemLoading(args: any) {
    if (isIOS) {
      const iosCell = args.ios;
      iosCell.selectionStyle = UITableViewCellSelectionStyle.None;
    }
  }
}
