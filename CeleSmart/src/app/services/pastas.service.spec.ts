import { TestBed } from '@angular/core/testing';

import { PastasService } from './pastas.service';

describe('PastasService', () => {
  let service: PastasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
