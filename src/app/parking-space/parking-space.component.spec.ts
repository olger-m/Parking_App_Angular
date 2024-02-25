import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpaceComponent } from './parking-space.component';

describe('ParkingSpaceComponent', () => {
  let component: ParkingSpaceComponent;
  let fixture: ComponentFixture<ParkingSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingSpaceComponent]
    });
    fixture = TestBed.createComponent(ParkingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
