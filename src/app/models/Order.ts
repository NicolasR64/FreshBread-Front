import {Location} from "./Location";
import { Product } from "./Product";

export class Order{
  id!: number|null;
  date!: Date;
  location!: Location|null;
  products!: Product[]|null;
  state!: string;
  userId!: number;
}
