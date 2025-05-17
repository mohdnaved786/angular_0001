import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { SweetAlertService } from '../../../services/sweet-alert.service';
import { Question } from '../../../quiz/question.model';
import { QUESTIONS_HTML } from '../../../quiz/question-data';

@Component({
  selector: 'app-html-quiz',
  templateUrl: './html-quiz.component.html',
  styleUrls: ['./html-quiz.component.css']
})
export class HtmlQuizComponent {

   currentQuestionIndex = 0;
    score = 0;
    timer = 30;
    timerInterval: any;
    showResult = false;
    randomizedQuestions: Question[] = [];
    userAnswers: { question: string, correctAnswer: string, selectedAnswer: string }[] = [];
    darkMode = false;
  
    @HostBinding('class.dark-theme') get isDark() {
      return this.darkMode;
    }
  
    constructor(private alert: SweetAlertService) { }
  
    ngOnInit() {
      this.randomizedQuestions = this.shuffleArray(QUESTIONS_HTML.map(q => ({
        ...q,
        options: this.shuffleArray([...q.options])
      })));
      this.startTimer();
    }
  
    shuffleArray(array: any[]): any[] {
      return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    }
  
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          this.checkAnswer('');
        }
      }, 1000);
    }
  
    resetTimer() {
      clearInterval(this.timerInterval);
      this.timer = 30;
      this.startTimer();
    }
  
    playSound(isCorrect: boolean) {
      const audio = new Audio(`assets/sounds/${isCorrect ? 'correct' : 'wrong'}.mp3`);
      audio.play();
    }
  
    checkAnswer(selected: string) {
      clearInterval(this.timerInterval);
      const currentQ = this.randomizedQuestions[this.currentQuestionIndex];
      const isCorrect = selected === currentQ.answer;
  
      if (isCorrect) {
        this.score++;
        this.alert.showSuccess(`Good job!`);
      } else {
        this.alert.showError(`Better luck next time!`);
      }
  
      this.userAnswers.push({
        question: currentQ.question,
        correctAnswer: currentQ.answer,
        selectedAnswer: selected
      });
  
      this.playSound(isCorrect);
  
      setTimeout(() => this.nextQuestion(), 1000);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.randomizedQuestions.length) {
        this.resetTimer();
      } else {
        this.showResult = true;
        this.alert.showFinalScore(this.score, this.randomizedQuestions.length);
      }
    }
  
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.showResult = false;
      this.userAnswers = [];
      this.randomizedQuestions = this.shuffleArray(QUESTIONS_HTML.map(q => ({
        ...q,
        options: this.shuffleArray([...q.options])
      })));
      this.resetTimer();
    }
  
    toggleTheme() {
      this.darkMode = !this.darkMode;
    }
  
    ngOnDestroy() {
      clearInterval(this.timerInterval);
    }

}
