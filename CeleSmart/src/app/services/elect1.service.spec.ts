import { TestBed } from '@angular/core/testing';
import {Elect1Service} from './elect1.Service';

describe('Elect1Service', () => {
  let service: Elect1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Elect1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
