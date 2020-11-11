import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLabelComponent } from './hero-label.component';

describe('HeroLabelComponent', () => {
  let component: HeroLabelComponent;
  let fixture: ComponentFixture<HeroLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
