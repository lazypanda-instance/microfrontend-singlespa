import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  routeChangeSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {

  }
}
