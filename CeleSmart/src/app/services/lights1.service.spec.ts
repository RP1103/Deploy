import { TestBed } from '@angular/core/testing';

import { Lights1Service } from './lights1.service';

describe('Lights1Service', () => {
  let service: Lights1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lights1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
