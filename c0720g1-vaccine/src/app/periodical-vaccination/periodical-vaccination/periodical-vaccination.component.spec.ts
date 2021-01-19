import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalVaccinationComponent } from './periodical-vaccination.component';

describe('PeriodicalVaccinationComponent', () => {
  let component: PeriodicalVaccinationComponent;
  let fixture: ComponentFixture<PeriodicalVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalVaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
