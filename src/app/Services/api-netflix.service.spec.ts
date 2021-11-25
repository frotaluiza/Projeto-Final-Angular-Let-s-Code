import { TestBed } from '@angular/core/testing';

import { ApiNetflixService } from './api-netflix.service';

describe('ApiNetflixService', () => {
  let service: ApiNetflixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNetflixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
