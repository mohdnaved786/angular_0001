import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { PublicPagesComponent } from './public-pages.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    PublicPagesComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    PublicPagesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PublicPagesModule { }
