import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStepOneComponent } from './form-step-one/form-step-one.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form_step_one',
    pathMatch: 'full'
  },
  {
    path: 'form_step_one',
    component: FormStepOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegistrationRoutingModule { }
