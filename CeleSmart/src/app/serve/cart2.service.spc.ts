import { TestBed } from '@angular/core/testing';

import { Cart2Service } from './cart2.service';

describe('Cart2Service', () => {
  let service: Cart2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
