import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
  links = [
    { name: 'Supplier', path: '/home/master/supplier/supplier-list' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
