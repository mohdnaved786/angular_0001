import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivatePagesComponent } from './private-pages/private-pages.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public-pages/public-pages.module').then((module) => module.PublicPagesModule)
  },

  {
    path: 'private',
    // component: PrivatePagesComponent,
    loadChildren: () => import('./private-pages/private-pages.module').then((module) => module.PrivatePagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
