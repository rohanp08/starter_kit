import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public account: any;

  constructor(private sessionStorage: SessionStorageService) { }

  ngOnInit() {
    this.account = this.sessionStorage.retrieve("account");
  }

}
