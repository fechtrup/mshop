import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineWithIconComponent } from './headline-with-icon.component';

describe('HeadlineWithIconComponent', () => {
  let component: HeadlineWithIconComponent;
  let fixture: ComponentFixture<HeadlineWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
