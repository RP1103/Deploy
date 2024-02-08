import { TestBed } from '@angular/core/testing';

import { Lights2Service } from './lights2.service';

describe('Lights2Service', () => {
  let service: Lights2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lights2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
