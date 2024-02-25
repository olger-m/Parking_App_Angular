import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParkingLotComponent } from './create-parking-lot.component';

describe('CreateParkingLotComponent', () => {
  let component: CreateParkingLotComponent;
  let fixture: ComponentFixture<CreateParkingLotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateParkingLotComponent]
    });
    fixture = TestBed.createComponent(CreateParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
