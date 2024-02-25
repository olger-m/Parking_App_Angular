import { Component } from '@angular/core';
import { ParkingLotService } from '../service/parking-lot.service';
import { Router } from '@angular/router';
import { ParkingLot } from '../model/ParkingLot';

@Component({
  selector: 'app-create-parking-lot',
  templateUrl: './create-parking-lot.component.html',
  styleUrls: ['./create-parking-lot.component.css']
})
export class CreateParkingLotComponent {

  parkingLot: ParkingLot = new ParkingLot();
  submitted = false;

  constructor(private parkingLotService:ParkingLotService,private router:Router) { }


  newParkingLot(): void {
    this.submitted = false;
    this.parkingLot= new ParkingLot();
  }

  save() {
    console.log(this.parkingLot)
    this.parkingLotService.createParkingLot(this.parkingLot).subscribe(data => {
      console.log(data)
      this.newParkingLot()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  gotoCreate() {
    this.submitted=false
    this.router.navigate(['/create']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/parking-lots']);
  }

}
