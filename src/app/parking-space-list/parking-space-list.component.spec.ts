import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpaceListComponent } from './parking-space-list.component';

describe('ParkingSpaceListComponent', () => {
  let component: ParkingSpaceListComponent;
  let fixture: ComponentFixture<ParkingSpaceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingSpaceListComponent]
    });
    fixture = TestBed.createComponent(ParkingSpaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
