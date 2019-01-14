import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from './client/client.component';
import {LoginComponent} from './login/login.component';
import {RegComponent} from './reg/reg.component';
import {EmployeeComponent} from './employee/employee.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'product', component: ProductComponent},
  {path: '', component: ClientComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
