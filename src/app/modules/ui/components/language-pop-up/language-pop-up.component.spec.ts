import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePopUpComponent } from './language-pop-up.component';

describe('LanguagePopUpComponent', () => {
  let component: LanguagePopUpComponent;
  let fixture: ComponentFixture<LanguagePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
