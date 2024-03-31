import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHomeWorkComponent } from './first-home-work.component';

describe('FirstHomeWorkComponent', () => {
  let component: FirstHomeWorkComponent;
  let fixture: ComponentFixture<FirstHomeWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstHomeWorkComponent]
    });
    fixture = TestBed.createComponent(FirstHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
