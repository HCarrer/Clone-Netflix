import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page-logged-off',
  templateUrl: './home-page-logged-off.component.html',
  styleUrls: ['./home-page-logged-off.component.scss']
})
export class HomePageLoggedOffComponent implements OnInit {

  @Input() isLoggedEvent: boolean = false;
  @Output() loginEventOutput = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  logInUser() {
    this.isLoggedEvent = !this.isLoggedEvent;
    this.loginEventOutput.emit(this.isLoggedEvent);
  }

}
