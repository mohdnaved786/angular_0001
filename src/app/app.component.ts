import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading$ = this._loaderService.isLoading$;
  constructor(private _loaderService: LoaderService) {

  }

  ngOnInit(): void {
  console.log('naved')
  }
}













