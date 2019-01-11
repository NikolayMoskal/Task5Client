import {User} from './user';
import {Account} from './account';
import {Role} from './role';

export class CompositeModel {
  user: User;
  account: Account;
  role: Role;
}
