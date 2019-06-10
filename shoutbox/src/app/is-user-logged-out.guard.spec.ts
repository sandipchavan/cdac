import { TestBed, async, inject } from '@angular/core/testing';

import { IsUserLoggedOutGuard } from './is-user-logged-out.guard';

describe('IsUserLoggedOutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsUserLoggedOutGuard]
    });
  });

  it('should ...', inject([IsUserLoggedOutGuard], (guard: IsUserLoggedOutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
