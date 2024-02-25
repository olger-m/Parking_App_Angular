import { ParkingSpace } from "./ParkingSpace";
import { Vehicle } from "./Vehicle";

export class ParkingTransaction{
  id!:number;
  parkingSpace!:ParkingSpace;
  vehicle!:Vehicle;
  startTimeStamp!:Date;
  endTimeStamp?:Date;
  price!:number;
  duration!:string;
}