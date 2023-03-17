/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserSignInService } from './userSignIn.service';

describe('Service: UserSignIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSignInService]
    });
  });

  it('should ...', inject([UserSignInService], (service: UserSignInService) => {
    expect(service).toBeTruthy();
  }));
});
