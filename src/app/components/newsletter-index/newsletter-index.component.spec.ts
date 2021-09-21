import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterIndexComponent } from './newsletter-index.component';

describe('NewsletterIndexComponent', () => {
  let component: NewsletterIndexComponent;
  let fixture: ComponentFixture<NewsletterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
