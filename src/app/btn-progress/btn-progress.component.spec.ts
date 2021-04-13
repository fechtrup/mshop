import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnProgressComponent } from './btn-progress.component';

describe('BtnProgressComponent', () => {
  let component: BtnProgressComponent;
  let fixture: ComponentFixture<BtnProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
