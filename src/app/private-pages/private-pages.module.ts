import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivatePagesRoutingModule } from './private-pages-routing.module';
import { PrivatePagesComponent } from './private-pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  declarations: [
    PrivatePagesComponent,
    DashboardComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    PrivatePagesRoutingModule
  ]
})
export class PrivatePagesModule { }
