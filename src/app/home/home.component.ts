import {ClientService} from '../services/client.service';
import {Client} from '../models/client';
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClientService]
})
export class HomeComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
      }
    );
  }
}
