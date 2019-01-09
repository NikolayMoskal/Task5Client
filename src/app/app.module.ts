import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ClientService} from './services/client.service';
import {HttpClientModule} from '@angular/common/http';
import {ChartComponent} from './chart/chart.component';
import {ChartService} from './services/chart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClientService,
    ChartService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
