import { Component, OnInit } from '@angular/core';
import { CustomVoiceService } from 'src/app/services/custom-voice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  voices: SpeechSynthesisVoice[] = [];
  selectedVoiceName: string = '';
  username = 'Naved';

  constructor(private speechService: CustomVoiceService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.voices = this.speechService.getVoices();
    }, 500)


    setTimeout(() => {
      this.speechService.speak(`Welcome to ${this.username}`, this.selectedVoiceName);
    }, 1000);
  }

  onVoiceChange() {
    this.speechService.speak(`Hello ${this.username}`, this.selectedVoiceName);
  }

}
