import { TestBed } from '@angular/core/testing';

import { ImportAndExportService } from './import-and-export.service';

describe('ImportAndExportService', () => {
  let service: ImportAndExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportAndExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
