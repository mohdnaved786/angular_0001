import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { HtmlQuizComponent } from './html-quiz/html-quiz.component';
import { CssQuizComponent } from './css-quiz/css-quiz.component';
import { JavascriptQuizComponent } from './javascript-quiz/javascript-quiz.component';
import { AngularQuizComponent } from './angular-quiz/angular-quiz.component';
import { ReactQuizComponent } from './react-quiz/react-quiz.component';


@NgModule({
  declarations: [
    HtmlQuizComponent,
    CssQuizComponent,
    JavascriptQuizComponent,
    AngularQuizComponent,
    ReactQuizComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
