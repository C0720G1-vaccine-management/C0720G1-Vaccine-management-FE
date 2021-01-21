import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationByRequestCreateComponent } from './vaccination-by-request-create.component';

describe('VaccinationByRequestCreateComponent', () => {
  let component: VaccinationByRequestCreateComponent;
  let fixture: ComponentFixture<VaccinationByRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationByRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationByRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
