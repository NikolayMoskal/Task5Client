import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientComponent} from './client/client.component';
import {ClientService} from './services/client.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {RegComponent} from './reg/reg.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {BookingService} from './services/booking.service';
import {EmployeeService} from './services/employee.service';
import {ProductService} from './services/product.service';
import {EmployeeComponent} from './employee/employee.component';
import {ProductComponent} from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    EmployeeComponent,
    ProductComponent,
    RegComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClientService,
    AuthGuardService,
    AuthService,
    BookingService,
    EmployeeService,
    ProductService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
