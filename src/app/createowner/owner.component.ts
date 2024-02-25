import { Component } from '@angular/core';
import { Owner } from '../model/Owner';
import { Router } from '@angular/router';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {

  owner: Owner = new Owner();
  submitted = false;

  constructor(private ownerService:OwnerService,private router:Router) { }


  newOwner(): void {
    this.submitted = false;
    this.owner= new Owner();
  }

  save() {
    console.log(this.owner)
    this.ownerService.createOwner(this.owner).subscribe(data => {
      console.log(data)
      this.newOwner()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  gotoCreate() {
    this.submitted=false
    this.router.navigate(['/createowner']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/ownerlist']);
  }

}
