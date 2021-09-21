import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-newsletter-index',
  templateUrl: './newsletter-index.component.html',
  styleUrls: ['./newsletter-index.component.scss']
})
export class NewsletterIndexComponent implements OnInit {

  @Output() labelClick = new EventEmitter();

  clicked: boolean = false;
  email: string = '';
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.clicked = value);
  }

  ngOnInit(): void {
  }

  onClick() {
    this.labelClick.emit();
    this.clicked = !this.clicked;
  }

}
