import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdHomeWorkComponent } from './third-home-work.component';

describe('ThirdHomeWorkComponent', () => {
  let component: ThirdHomeWorkComponent;
  let fixture: ComponentFixture<ThirdHomeWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdHomeWorkComponent]
    });
    fixture = TestBed.createComponent(ThirdHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
