import { TestBed } from '@angular/core/testing';
import {ElectService} from './elect.Service';

describe('ElectService', () => {
  let service: ElectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
