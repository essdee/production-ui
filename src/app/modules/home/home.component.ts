import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName!: string;
  links = [
    { name: 'New DC', path: '/home/newdc' },
    { name: 'View DC', path: '/home/viewdc' },
    { name: 'New GRN', path: '/home/newgrn' },
    { name: 'View GRN', path: '/home/viewgrn' },
  ];
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.userName = this.cookieService.get('userName');
  }
}
