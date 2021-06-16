import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToItem(){
    var previous_url = this.router.url.substr(this.router.url.lastIndexOf('/') + 1) + '$';
    var current_url = this.router.url.replace( new RegExp(previous_url), 'new-item' );
    this.router.navigateByUrl(current_url);
  }

}