import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissisionDialogComponent } from './add-missision-dialog.component';

describe('AddMissisionDialogComponent', () => {
  let component: AddMissisionDialogComponent;
  let fixture: ComponentFixture<AddMissisionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMissisionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMissisionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
