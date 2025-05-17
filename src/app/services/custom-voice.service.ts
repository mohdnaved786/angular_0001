import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomVoiceService {
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
    };
    this.voices = window.speechSynthesis.getVoices();
  }

  getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  speak(text: string, selectedVoiceName?: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;

    if (selectedVoiceName) {
      const voice = this.voices.find(v => v.name === selectedVoiceName);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      }
    }

    window.speechSynthesis.speak(utterance);
  }
}
