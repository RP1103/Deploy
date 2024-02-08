import { TestBed } from '@angular/core/testing';

import { productCrudService } from './product-crud.service';

describe('productCrudService', () => {
  let service: productCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
