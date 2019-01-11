import {ModelBase} from './model.base';
import {Account} from './account';

export class User extends ModelBase {
  firstName: string;
  lastName: string;
  birthDate: Date;
  accounts?: Account[];
}
