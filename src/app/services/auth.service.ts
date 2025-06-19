import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.afAuth.authState;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await this.afAuth.signInWithPopup(provider);

    if (result.user) {
      const { uid, displayName, email, photoURL } = result.user;
      await this.firestore.collection('users').doc(uid).set({
        uid,
        name: displayName,
        email,
        photoURL
      }, { merge: true });
    }
  }

  logout() {
    return this.afAuth.signOut();
  }
}
