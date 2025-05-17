import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speak(text: string) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'hi-IN';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }

  constructor() { }
}
