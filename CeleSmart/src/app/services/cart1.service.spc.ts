import { TestBed } from '@angular/core/testing';

import { Cart1Service } from './cart1.service';

describe('Cart1Service', () => {
  let service: Cart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
