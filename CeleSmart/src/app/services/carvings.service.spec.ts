import { TestBed } from '@angular/core/testing';

import { CarvingService } from './carvings.service';

describe('CarvingService', () => {
  let service: CarvingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarvingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
