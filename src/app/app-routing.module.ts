import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { PlayareaComponent } from './components/playarea/playarea.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: GamesComponent},
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: 'play/:gameId', component: PlayareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
