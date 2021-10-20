import { TestBed } from '@angular/core/testing';

import { VerifyUserGuard } from './verify-user.guard';

describe('VerifyUserGuard', () => {
  let guard: VerifyUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
