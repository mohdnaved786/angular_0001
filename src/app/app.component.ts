import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  isLoading$ = this._loaderService.isLoading$;
  constructor(private _loaderService: LoaderService, private authService: AuthService) {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }



  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  
  }
}








// function sum(a,b){
// return a + b
// }

// const add = sum(10,20);
// console.log(add)






