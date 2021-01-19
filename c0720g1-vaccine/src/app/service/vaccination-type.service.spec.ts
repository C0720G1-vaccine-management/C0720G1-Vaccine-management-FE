import { TestBed } from '@angular/core/testing';

import { VaccinationTypeService } from './vaccination-type.service';

describe('VaccinationTypeService', () => {
  let service: VaccinationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
