// profile.component.ts
import { Component, OnInit, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Owner } from '../../model/Owner';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../../service/profile-service.service';
import { ParkingTransaction } from '../../model/Transaction';
import { ParkingLot } from '../../model/ParkingLot';
import { ParkingLotService } from '../../service/parking-lot.service';
import { ParkingSpace } from '../../model/ParkingSpace';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Owner = new Owner();
  id: number = 0;
  transactions!: ParkingTransaction[];
  parkingLots!: ParkingLot[];
  selectedParkingLot: ParkingLot | null = null;
  parkingspaces!: ParkingSpace[];
  selectedParkingLotId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileServiceService,
    private parkingLotService: ParkingLotService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.profileService.getTransactions(this.id).subscribe((data) => {
      this.transactions = data;
    });
    this.parkingLotService.getParkingLots().subscribe((data) => {
      this.parkingLots = data;
    });

    this.profileService.getUserData(this.id).subscribe((data) => {
      this.user = data;
    });
  }

lotChanged() {
  // const selectedParkingLotId = Number((document.getElementById('parkingSpace') as HTMLSelectElement).value);
  // this.parkingLotService.getParkingLots().subscribe((response) => {
  //   this.parkingLots = response;
  //   // Set the selected parking lot
  //   const selectedLot = this.parkingLots.find((lot) => lot.id === selectedParkingLotId);
  //   console.log(selectedLot)
  //   if (selectedLot) {
  //     this.selectedParkingLot = selectedLot;
  //   }
  //   this.parkingspaces=this.parkingLotService.getParkingSpacesforLot(this.selectedParkingLot?.id).subscribe(data=>{this.parkingLots=data})
  // });
}
 
}
