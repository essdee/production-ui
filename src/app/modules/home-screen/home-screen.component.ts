import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  userName !: string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.userName = this.cookieService.get('userName');
  }

}
