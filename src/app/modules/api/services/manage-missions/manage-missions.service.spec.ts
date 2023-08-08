import { TestBed } from '@angular/core/testing';

import { ManageMissionsService } from './manage-missions.service';

describe('ManageMissionsService', () => {
  let service: ManageMissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageMissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
