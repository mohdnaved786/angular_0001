import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { SpeechService } from 'src/app/services/speech.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private _router: Router, private _alertService: SweetAlertService, private _loaderService: LoaderService, private _speechService: SpeechService) {

  }
  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.updateBodyClass();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  isDarkMode = false;
  quizzes = [
    {
      key: 'angular',
      title: 'Angular',
      description: 'Test your Angular knowledge!',
      icon: '🅰️',
      level: 'Intermediate'
    },
    {
      key: 'css',
      title: 'CSS',
      description: 'Style your way through questions!',
      icon: '🎨',
      level: 'Beginner'
    },
    {
      key: 'html',
      title: 'HTML',
      description: 'The building blocks of the web.',
      icon: '🔤',
      level: 'Beginner'
    },
    {
      key: 'javascript',
      title: 'JavaScript',
      description: 'Code logic and behavior.',
      icon: '📜',
      level: 'Intermediate'
    },
    {
      key: 'react',
      title: 'React',
      description: 'UI made reactive!',
      icon: '⚛️',
      level: 'Expert'
    }
  ];

  startQuiz(categoryKey: string) {
    if (categoryKey === 'angular') {
      this._loaderService.show();
      setTimeout(() => {
        this._loaderService.hide();
        this._speechService.speak("Welcome to ANGULAR Quiz.")
        this._alertService.showSuccess("Welcome to ANGULAR Quiz.")
        this._router.navigate(['private/quiz/angular_quiz'])
      }, 2000)
    } else if (categoryKey === 'css') {
      this._loaderService.show();
      setTimeout(() => {
        this._loaderService.hide();
        this._speechService.speak("Welcome to CSS Quiz.")
        this._alertService.showSuccess("Welcome to CSS Quiz.")
        this._router.navigate(['private/quiz/css_quiz'])
      }, 2000);
    } else if (categoryKey === 'html') {
      this._loaderService.show();
      setTimeout(() => {
        this._loaderService.hide();
        this._speechService.speak("Welcome to HTML Quiz.")
        this._alertService.showSuccess("Welcome to HTML Quiz.")
        this._router.navigate(['private/quiz/html_quiz'])
      }, 2000);
    } else if (categoryKey === 'react') {
      this._loaderService.show();
      setTimeout(() => {
        this._loaderService.hide();
        this._speechService.speak("Welcome to REACT Quiz.")
        this._alertService.showSuccess("Welcome to REACT Quiz.")
        this._router.navigate(['private/quiz/react_quiz'])
      }, 2000);
    } else if (categoryKey === 'javascript') {
      this._loaderService.show();
      setTimeout(() => {
        this._loaderService.hide();
        this._speechService.speak("Welcome to JAVASCRIPT Quiz.")
        this._alertService.showSuccess("Welcome to JAVASCRIPT Quiz.")
        this._router.navigate(['private/quiz/javaScript_quiz'])
      }, 2000);
    } else {
      this._alertService.showWarning("something went wrong.")
    }
  }

}
