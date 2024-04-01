import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthHomeWorkComponent } from './fourth-home-work.component';

describe('FourthHomeWorkComponent', () => {
  let component: FourthHomeWorkComponent;
  let fixture: ComponentFixture<FourthHomeWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthHomeWorkComponent]
    });
    fixture = TestBed.createComponent(FourthHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
