import {Booking} from './booking';
import {ModelBase} from './model.base';

export class Product extends ModelBase {
  name: string;
  price: number;
  bookings?: Booking[];
}
