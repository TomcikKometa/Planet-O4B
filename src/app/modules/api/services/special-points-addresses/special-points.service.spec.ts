import { TestBed } from '@angular/core/testing';

import { SpecialPointsService } from './special-points.service';

describe('SpecialPointsService', () => {
  let service: SpecialPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
