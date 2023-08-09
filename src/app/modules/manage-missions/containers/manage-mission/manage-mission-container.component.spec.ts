import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMissionContainerComponent } from './manage-mission-container.component';

describe('ManageMissionComponent', () => {
  let component: ManageMissionContainerComponent;
  let fixture: ComponentFixture<ManageMissionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMissionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMissionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
