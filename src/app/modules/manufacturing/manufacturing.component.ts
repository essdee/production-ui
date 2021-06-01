import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss'],
})
export class ManufacturingComponent implements OnInit {
  links = [
    { name: 'New DC', path: '/home/mfg/newdc' },
    { name: 'View DC', path: '/home/mfg/viewdc' },
    { name: 'New GRN', path: '/home/mfg/newgrn' },
    { name: 'View GRN', path: '/home/mfg/viewgrn' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
