import { Component, OnInit } from '@angular/core';
import { EthereumService } from 'src/app/providers/ethereum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private etherService: EthereumService) { }

  ngOnInit() {
    this.etherService.loadWeb3();
    this.etherService.getAccountInfo();
  }

}
