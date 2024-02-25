import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateParkingLotComponent } from './create-parking-lot/create-parking-lot.component';
import { TestComponent } from './test/test.component';
import { ParkingLotListComponent } from './parking-lot-list/parking-lot-list.component';
import { ParkingSpaceListComponent } from './parking-space-list/parking-space-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminprofileComponent } from './pages/adminprofile/adminprofile.component';
import { OwnerComponent } from './createowner/owner.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  {
    path: 'searchresult',
    component: SearchresultComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'parkinglist', // child route path
        component: ParkingLotListComponent, // child route component that the router renders
      },
      {
        path: 'parkingspaces/:id', // child route path
        component: ParkingSpaceListComponent, // child route component that the router renders
      }
    ]},
  { path: 'admin', component: AdminprofileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreateParkingLotComponent},
  { path: 'createowner', component: OwnerComponent},
  { path: 'test', component: TestComponent},
  { path: 'parking-lots', component: ParkingLotListComponent},
{ path: 'profile/:id', component: ProfileComponent},
{ path: 'payment', component: PaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
