import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-languages-btn',
  templateUrl: './languages-btn.component.html',
  styleUrls: ['./languages-btn.component.scss']
})
export class LanguagesBtnComponent implements OnInit {
  
  showOptions: boolean = true;

  languages: string[] = ['Português', 'Inglês', 'Espanhol', 'Alemão', 'Japonês'];

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(): void {
    this.btnClick.emit();
    this.showOptions = !this.showOptions;
  }
}
