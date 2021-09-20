import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesBtnComponent } from './languages-btn.component';

describe('LanguagesBtnComponent', () => {
  let component: LanguagesBtnComponent;
  let fixture: ComponentFixture<LanguagesBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
