import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivatePagesComponent } from './private-pages/private-pages.component';
// import { NspComponent } from './nsp/nsp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grievance-dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: 'grievance-dashboard',
  //   // loadChildren: () => import('./public-pages/public-pages.module').then((module) => module.PublicPagesModule)
  //   component: NspComponent,
  //   loadChildren: ()=> import('./nsp/nsp.module').then((module)=> module.NspModule)
  // },

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
