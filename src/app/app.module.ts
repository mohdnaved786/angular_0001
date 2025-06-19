import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';

const firebaseConfig = {
  apiKey: "AIzaSyBi3yGpbPU58k1zYcAm3gtMxd9VpF7EpJs",
  authDomain: "angular-auth-fce92.firebaseapp.com",
  projectId: "angular-auth-fce92",
  storageBucket: "angular-auth-fce92.firebasestorage.app",
  messagingSenderId: "36221573411",
  appId: "1:36221573411:web:4d4f2767be69cfd5299496"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
