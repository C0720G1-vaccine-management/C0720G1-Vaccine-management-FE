import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationByRequestListComponent } from './vaccination-by-request-list.component';

describe('VaccinationByRequestListComponent', () => {
  let component: VaccinationByRequestListComponent;
  let fixture: ComponentFixture<VaccinationByRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationByRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationByRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
