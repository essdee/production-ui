import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName!: string;

  mainLinks = [
    { name: 'Master', path: '/home/master' },
    { name: 'Manufacturing', path: '/home/mfg' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.userName = '';
  }
}
