import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBackgroundImageComponent } from './index-background-image.component';

describe('IndexBackgroundImageComponent', () => {
  let component: IndexBackgroundImageComponent;
  let fixture: ComponentFixture<IndexBackgroundImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBackgroundImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
