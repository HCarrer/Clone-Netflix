import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private changeNewsletterLabel: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleNewsletterLabel(): void {
    this.changeNewsletterLabel = !this.changeNewsletterLabel;
    this.subject.next(this.changeNewsletterLabel);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
