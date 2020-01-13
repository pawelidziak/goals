import { GoalsListFacade } from './+state/goals-list.facade';
import { Component, OnInit } from '@angular/core';
import { DataService, DataItem } from '../data.service';
import { Goal } from './+state/goals-list.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ns-players',
  moduleId: module.id,
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayerComponent implements OnInit {
  items: DataItem[];

  loaded$: Observable<boolean>;
  goals$: Observable<Goal[]>;

  constructor(
    private itemService: DataService,
    private facade: GoalsListFacade
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.getPlayers();
    // console.log('this.items', this.items);
    this.loaded$ = this.facade.loaded$;
    this.goals$ = this.facade.allGoalsList$;

    this.loaded$.subscribe(res => console.log('loaded$', res));
    this.goals$.subscribe(res => console.log('goals$', res));
  }
}
