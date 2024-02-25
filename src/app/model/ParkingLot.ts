import { ParkingSpace } from "./ParkingSpace";

export class ParkingLot{
  id!:number;
  name!:string;
  address!:string;
  stories!:number;
  capacity!:number;
  availableSpaces!:number;
  parkingspaces!:ParkingSpace[];
  
}