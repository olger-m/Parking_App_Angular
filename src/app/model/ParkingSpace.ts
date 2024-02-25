import { ParkingLot } from "./ParkingLot";
import { Vehicle } from "./Vehicle";

export class ParkingSpace{

  id! :number;
  number! :string;
  status!:string;
  isAvailable! : boolean;
  ownerId?: string | null ;
  parkingSpaceStatus!: string;
  vehicle?: Vehicle;
  occupied!: boolean;
  costPerHour!: number;
  parkingLot?: ParkingLot;
}