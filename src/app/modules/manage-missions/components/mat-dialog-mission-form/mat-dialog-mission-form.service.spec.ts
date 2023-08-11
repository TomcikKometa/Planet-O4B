import { TestBed } from '@angular/core/testing';

import { MatDialogMissionFormService } from './mat-dialog-mission-form.service';

describe('MatDialogMissionFormService', () => {
  let service: MatDialogMissionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatDialogMissionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
