import { Component, OnInit } from '@angular/core';
import { DataService, DataItem } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ns-players',
  moduleId: module.id,
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayerComponent implements OnInit {
  items: DataItem[];

  constructor(private itemService: DataService) {}

  ngOnInit(): void {
    this.items = this.itemService.getPlayers();
  }
}
