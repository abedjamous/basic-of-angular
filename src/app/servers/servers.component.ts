import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers' ,
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created!";
  serverName = "test server";
  servers = ['Testserver', 'Testserver 2'];
  // username = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is '+ "" +this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
