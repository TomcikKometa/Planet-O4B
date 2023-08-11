import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPointsTableListComponent } from './special-points-table-list.component';

describe('SpecialPointsTableListComponent', () => {
  let component: SpecialPointsTableListComponent;
  let fixture: ComponentFixture<SpecialPointsTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPointsTableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialPointsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
