import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent {

  constructor(private router:Router){

  }

testnav() {
this.router.navigate(['searchresult/parkinklist']);
}

}
