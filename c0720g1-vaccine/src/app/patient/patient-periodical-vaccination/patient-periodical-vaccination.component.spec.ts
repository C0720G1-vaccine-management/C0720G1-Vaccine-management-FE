import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPeriodicalVaccinationComponent } from './patient-periodical-vaccination.component';

describe('PatientPeriodicalVaccinationComponent', () => {
  let component: PatientPeriodicalVaccinationComponent;
  let fixture: ComponentFixture<PatientPeriodicalVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPeriodicalVaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPeriodicalVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
