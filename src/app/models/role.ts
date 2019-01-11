import {ModelBase} from './model.base';
import {Account} from './account';

export class Role extends ModelBase {
  roleName: string;
  accounts?: Account[];
}
