import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

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
    console.log(formData.value)
  }

}