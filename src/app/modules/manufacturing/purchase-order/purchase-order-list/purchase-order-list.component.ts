import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss']
})
export class PurchaseOrderListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToPO(){
    var previous_url = this.router.url.substr(this.router.url.lastIndexOf('/') + 1) + '$';
    var current_url = this.router.url.replace( new RegExp(previous_url), 'new-purchase-order' );
    this.router.navigateByUrl(current_url);
  }

}
