import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSiteComponent } from './offer-site.component';

describe('OfferSiteComponent', () => {
  let component: OfferSiteComponent;
  let fixture: ComponentFixture<OfferSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
