import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPointsAddressesComponent } from './special-points-addresses.component';

describe('SpecialPointsAddressesComponent', () => {
  let component: SpecialPointsAddressesComponent;
  let fixture: ComponentFixture<SpecialPointsAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPointsAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialPointsAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
