import { Component, Input, OnInit } from '@angular/core';
import { ParkingLot } from '../model/ParkingLot';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingLotService } from '../service/parking-lot.service';

@Component({
  selector: 'app-parking-lot-list',
  templateUrl: './parking-lot-list.component.html',
  styleUrls: ['./parking-lot-list.component.css']
})
export class ParkingLotListComponent implements OnInit{

listOfParkingLots!: ParkingLot[];
parkingLot! :ParkingLot;
sortKey: string="null";
sortOrder: string="null";
 constructor(private route: ActivatedRoute,private parkingLotService:ParkingLotService,private router:Router) { }

 ngOnInit(): void {
  
  this.reloadData();

 }

  sort(key: string) {
    if (this.sortKey === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortOrder = 'asc';
    }
   this.listOfParkingLots.sort((a:any , b: any) => {
      const firstValue = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
      const secondValue = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];
      if (firstValue < secondValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (a[key] > b[key]) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
      });
   }

 reloadData() {
  this.parkingLotService.getParkingLots().subscribe(data=>{
    this.listOfParkingLots=data;
   } )}

  onDelete(id: number) {
      this.parkingLotService.deleteParkingLotById(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
}
  gotoList() {
    this.router.navigate(['/parkinglotlist']);
  }
  gotoCreate() {
    this.router.navigate(['/create']);
}
goToParkingSacesList(arg0: number) {
this.router.navigate(['searchresult/parkingspaces',arg0]);
}

 editParkingLot(parkingLotId: number) {
    this.router.navigate(['updateparkinglot', parkingLotId]);
  }
    
}
