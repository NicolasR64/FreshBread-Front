import {Location} from "./location";

export class Order{
  id!: number;
  date!: Date;
  location!: Location;
  products!: string;
  state!: string;
  userId!: number;
}
