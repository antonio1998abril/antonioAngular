import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHomeWorkComponent } from './second-home-work.component';

describe('SecondHomeWorkComponent', () => {
  let component: SecondHomeWorkComponent;
  let fixture: ComponentFixture<SecondHomeWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondHomeWorkComponent]
    });
    fixture = TestBed.createComponent(SecondHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
