import { TestBed } from '@angular/core/testing';

import { PglistService } from './pglist.service';

describe('PglistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PglistService = TestBed.get(PglistService);
    expect(service).toBeTruthy();
  });
});
