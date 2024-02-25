import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingSpaceService } from '../service/parking-space.service';
import { ParkingSpace } from '../model/ParkingSpace';
import { TransactionService } from '../service/transaction.service';
import { ParkingTransaction } from '../model/Transaction';

@Component({
  selector: 'app-parking-space-list',
  templateUrl: './parking-space-list.component.html',
  styleUrls: ['./parking-space-list.component.css']
})
export class ParkingSpaceListComponent implements OnInit{

listOfParkingSpaces!: ParkingSpace[];
listOfAvailableParkingSpaces!: ParkingSpace[];
sortKey: string="null";
sortOrder: string="null";
  id: number=0;
  transaction:ParkingTransaction=new ParkingTransaction;

 constructor(private trasaction:TransactionService, private route: ActivatedRoute,private parkingSpaceService:ParkingSpaceService,private router:Router) { }
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   console.log(this.id)
   this.reloadData();
  }

sort(key: string) {
    if (this.sortKey === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortOrder = 'asc';
    }
   this.listOfParkingSpaces.sort((a:any , b: any) => {
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
  this.parkingSpaceService.getParkingSpaces(this.id).subscribe(data => {
    this.listOfParkingSpaces = data;
    this.listOfAvailableParkingSpaces = data.filter((parkingSpace: { occupied: any; }) => !parkingSpace.occupied);
  });
}
     gotoList() {
    this.router.navigate(['searchresult/parkinglist']);
   
  }

startTransaction(id:number) {
  console.log("start");
  const vehicleId = 1; 
  const parkingSpaceId = id; 
  this.reloadData()

  this.trasaction
  .startTransaction(vehicleId, parkingSpaceId)
    .subscribe(response => {
      console.log('Transaction created successfully:', response);
    }, error => {
      console.error('Error creating transaction:', error);
    });
    
}


}
