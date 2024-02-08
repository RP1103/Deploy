import { TestBed } from '@angular/core/testing';

import { CarvsService } from './carvs.service';

describe('CarvsService', () => {
  let service: CarvsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarvsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
