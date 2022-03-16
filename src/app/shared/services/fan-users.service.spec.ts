import { TestBed } from '@angular/core/testing';

import { FanUsersService } from './fan-users.service';

describe('FanUsersService', () => {
  let service: FanUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
