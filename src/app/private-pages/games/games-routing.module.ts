import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game_1',
    pathMatch: 'full'
  },
  {
    path: 'game_1',
    component: GuessTheNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
