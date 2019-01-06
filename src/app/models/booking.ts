import {Client} from './client';
import {Employee} from './employee';
import {Product} from './product';
import {ModelBase} from './model.base';

export class Booking extends ModelBase {
  date: Date;
  client: Client;
  employee: Employee;
  product: Product;
}
