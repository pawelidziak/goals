import { NSEmptyOutletComponent } from 'nativescript-angular/router';
import { ListMoviesComponent } from '@src/app/list-movies/list-movies.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

// export const routes: Routes = [
//   {
//       path: '',
//       redirectTo: '/home',
//       pathMatch: 'full',
//   },
//   {
//       path: 'home',
//       component: HomeComponent,
//   },
//   {
//     path: 'goal-tabs',
//     loadChildren: '~/app/goal-tabs/goal-tabs.module#TabsModule'
// },
// ];

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'players',
        outlet: 'playerTab',
        component: NSEmptyOutletComponent,
        // loadChildren: '~/app/player/players.module#PlayersModule'
        loadChildren: () => import('./player/players.module').then(m => m.PlayersModule)

      },
      {
        path: 'teams',
        outlet: 'teamTab',
        component: NSEmptyOutletComponent,
        // loadChildren: '~/app/team/teams.module#TeamsModule'
        loadChildren: () => import('./team/teams.module').then(m => m.TeamsModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    outlet: 'welcomeTab'
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
  // }
];
