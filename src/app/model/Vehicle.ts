import { Owner } from "./Owner";
import { ParkingTransaction } from "./Transaction";

export class Vehicle {
  id!:number;
  licensePlate!:string;
  brand!:string;
  model!:string;
  color!:string;
  year!:Date;
  owner!:Owner;
  parkingTransactions!:ParkingTransaction[];
}