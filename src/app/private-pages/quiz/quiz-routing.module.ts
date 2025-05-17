import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlQuizComponent } from './html-quiz/html-quiz.component';
import { CssQuizComponent } from './css-quiz/css-quiz.component';
import { JavascriptQuizComponent } from './javascript-quiz/javascript-quiz.component';
import { AngularQuizComponent } from './angular-quiz/angular-quiz.component';
import { ReactQuizComponent } from './react-quiz/react-quiz.component';

const routes: Routes = [
  {
    path: 'html_quiz',
    component: HtmlQuizComponent
  },
  {
    path: 'css_quiz',
    component: CssQuizComponent
  },
  {
    path: 'javaScript_quiz',
    component: JavascriptQuizComponent
  },
  {
    path: 'angular_quiz',
    component: AngularQuizComponent
  },
  {
    path: 'react_quiz',
    component: ReactQuizComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
