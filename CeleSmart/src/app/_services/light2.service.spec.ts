import { TestBed } from '@angular/core/testing';

import { Light2Service } from './light2.service';

describe('Light2Service', () => {
  let service: Light2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Light2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
