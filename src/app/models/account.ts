import {User} from './user';
import {Role} from './role';
import {ModelBase} from './model.base';

export class Account extends ModelBase {
  userName: string;
  password: string;
  user?: User;
  role?: Role;
}
