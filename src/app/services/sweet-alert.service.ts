import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  showAlert(
    title: string,
    text: string,
    icon: SweetAlertIcon = 'info'
  ) {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'OK'
    });
  }

  showSuccess(message: string, title: string = 'Success') {
    this.showAlert(title, message, 'success');
  }

  showError(message: string, title: string = 'Error') {
    this.showAlert(title, message, 'error');
  }

  showWarning(message: string, title: string = 'Warning') {
    this.showAlert(title, message, 'warning');
  }

  showConfirmation(
    title: string,
    text: string,
    confirmButtonText: string = 'Yes',
    cancelButtonText: string = 'No'
  ): Promise<boolean> {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText
    }).then((result) => result.isConfirmed);
  }
  showFinalScore(score: number, total: number) {
    Swal.fire('Quiz Completed!', `Your score is ${score} out of ${total}`, 'info');
  }
}
