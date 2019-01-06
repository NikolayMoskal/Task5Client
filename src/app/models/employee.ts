import {Booking} from './booking';
import {ModelBase} from './model.base';

export class Employee extends ModelBase {
  name: string;
  bookings: Booking[];
}
