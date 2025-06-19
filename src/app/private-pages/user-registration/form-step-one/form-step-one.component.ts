import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { SpeechService } from 'src/app/services/speech.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrls: ['./form-step-one.component.css']
})
export class FormStepOneComponent implements OnInit {
  form!: FormGroup;
  recognition: any;
  currentField: string = '';
  activeField: string | null = null;
  constructor(private fb: FormBuilder, private _alertService: SweetAlertService, private _loaderService: LoaderService, private _speechService: SpeechService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      console.log('Speech recognized:', speechResult);
      if (this.currentField) {
        this.form.get(this.currentField)?.setValue(speechResult);
      }
    };
  }

  startVoiceInput(field: string): void {
    this.activeField = field;
    this.currentField = field;
    this.recognition.start();
    setTimeout(() => {
      this.activeField = null;
    }, 5000);

  }

  submitForm(formData: any) {
    this._loaderService.show();
    setTimeout(() => {
      this._loaderService.hide();
      console.log(formData.value);
      this._speechService.speak("Congratulations, your form has been submitted successfully.");
      this._alertService.showSuccess("Congratulations, your form has been submitted successfully.");
      this.form.reset();
    }, 2000);
  }

  textToSpeech(inputText: any){
    this._speechService.speak(inputText)
  }

}