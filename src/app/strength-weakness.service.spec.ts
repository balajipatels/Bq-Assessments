import { TestBed } from '@angular/core/testing';

import { StrengthWeaknessService } from './strength-weakness.service';

describe('StrengthWeaknessService', () => {
  let service: StrengthWeaknessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthWeaknessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
