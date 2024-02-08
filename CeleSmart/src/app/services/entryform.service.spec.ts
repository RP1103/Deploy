import { TestBed } from '@angular/core/testing';

import { EntryformService } from './entryform.service';

describe('EntryformService', () => {
  let service: EntryformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
