import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPointsAdressesMatDialogComponent } from './special-points-adresses-mat-dialog.component';

describe('SpecialPointsAdressesMatDialogComponent', () => {
  let component: SpecialPointsAdressesMatDialogComponent;
  let fixture: ComponentFixture<SpecialPointsAdressesMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPointsAdressesMatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialPointsAdressesMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
