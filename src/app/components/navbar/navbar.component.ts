import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { LanguagesBtnComponent } from '../languages-btn/languages-btn.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() isLoggedOutputEvent = new EventEmitter<boolean>();

  isLogged: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  toLog() {
    this.isLogged = !this.isLogged;
    this.isLoggedOutputEvent.emit(this.isLogged);
  }

}