import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { SpeechService } from 'src/app/services/speech.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  private timerSub!: Subscription;
  form: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router, private _alertService: SweetAlertService, private _loaderService: LoaderService, private _speechService: SpeechService) {
    this.form = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
    this.timerSub = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }


  submitForm(formData: any) {
    if (this.form.valid) {
      this._loaderService.show();
      setTimeout(() => {
        this._loaderService.hide();
        this._speechService.speak(`welcome to ${this.form.value.email}`)
        this._alertService.showSuccess('Logged in successfully!');
        this._router.navigateByUrl(`private/dashboard?userid=${formData?.value?.email}`)
      }, 2000)
    } else {
      this._alertService.showError('Please fill all required fields.');
      this.form.markAllAsTouched();
    }
  }

  ngOnDestroy() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }



}






// confirmation aleart


// confirmDelete() {
//   this._alertService.showConfirmation('Are you sure?', 'This action cannot be undone!')
//     .then((confirmed) => {
//       if (confirmed) {
//         this._alertService.showSuccess('Deleted successfully!');
//       }
//     });
// }
//  this._alertService.showWarning('कृपया सभी आवश्यक फ़ील्ड भरें.')