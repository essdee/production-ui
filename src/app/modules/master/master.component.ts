import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
  links = [
    { name: 'Supplier', path: '/home/master/supplier' },
    { name: 'Item', path: '/home/master/item/item-list' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
