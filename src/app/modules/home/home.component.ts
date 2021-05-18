import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName !: string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.userName = this.cookieService.get('userName');
  }

}
