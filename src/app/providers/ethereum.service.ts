import { Injectable, OnInit } from '@angular/core';
import Web3 from 'web3';
import { SessionStorageService } from 'ngx-webstorage';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class EthereumService implements OnInit {

  private web3Provider: any;
  private account: any;

  constructor(private sessionStorage: SessionStorageService) {
  }

  ngOnInit() {
    this.loadWeb3();
    this.getAccountInfo();
  }

  loadWeb3() {
    if (window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    window.web3 = new Web3(this.web3Provider);
  }

  getAccountInfo() {
    const web3 = window.web3;
    web3.eth.getAccounts().then((accounts) => {
      this.account = accounts[0];
      this.sessionStorage.store("account", accounts[0]);
      console.log(accounts[0]);
    });
  }
}
