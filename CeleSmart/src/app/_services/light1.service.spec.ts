import { TestBed } from '@angular/core/testing';

import { Light1Service } from './light1.service';

describe('Light1Service', () => {
  let service: Light1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Light1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
