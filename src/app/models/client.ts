import {ModelBase} from './model.base';
import {Booking} from './booking';

export class Client extends ModelBase {
  name: string;
  bookings: Booking[];
}
