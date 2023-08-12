import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAddressesMatDialogComponent } from './special-addresses-mat-dialog.component';

describe('SpecialAddressesMatDialogComponent', () => {
  let component: SpecialAddressesMatDialogComponent;
  let fixture: ComponentFixture<SpecialAddressesMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialAddressesMatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAddressesMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
