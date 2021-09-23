import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLoggedOffComponent } from './home-page-logged-off.component';

describe('HomePageLoggedOffComponent', () => {
  let component: HomePageLoggedOffComponent;
  let fixture: ComponentFixture<HomePageLoggedOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageLoggedOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageLoggedOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
