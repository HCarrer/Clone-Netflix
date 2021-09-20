import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LanguagesBtnComponent } from '../languages-btn/languages-btn.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
