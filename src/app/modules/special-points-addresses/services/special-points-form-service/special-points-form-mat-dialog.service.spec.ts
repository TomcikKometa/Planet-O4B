import { TestBed } from '@angular/core/testing';

import { SpecialPointsFormMatDialogService } from './special-points-form-mat-dialog.service';

describe('SpecialPointsFormMatDialogService', () => {
  let service: SpecialPointsFormMatDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialPointsFormMatDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
