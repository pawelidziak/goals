import { Injectable } from '@angular/core';

export interface DataItem {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private players = new Array<DataItem>(
    { id: 1, name: 'Player One' },
    { id: 2, name: 'Player Two' },
    { id: 3, name: 'Player 3' },
    { id: 4, name: 'Player 4' },
    { id: 5, name: 'Player 5' },
    { id: 6, name: 'Player 6' },
    { id: 7, name: 'Player 7' },
    { id: 8, name: 'Player 8' },
    { id: 9, name: 'Player 9' },
    { id: 10, name: 'Player 10' },
    { id: 11, name: 'Player 11' },
    { id: 12, name: 'Player 12' },
    { id: 13, name: 'Player 13' },
    { id: 14, name: 'Player 14' },
    { id: 15, name: 'Player 15' },
  );

  private teams = new Array<DataItem>(
    { id: 1, name: 'Team One' },
    { id: 2, name: 'Team Two' }
  );

  getPlayers(): DataItem[] {
    return this.players;
  }

  getPlayer(id: number): DataItem {
    return this.players.filter(item => item.id === id)[0];
  }

  getTeams(): DataItem[] {
    return this.teams;
  }

  getTeam(id: number): DataItem {
    return this.teams.filter(item => item.id === id)[0];
  }
}
