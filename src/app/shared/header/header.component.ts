import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() links: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  navbarOpen = false;
  public clicked = false;
  _el: any;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onClick(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener('document: click', ['event'])
  private clickedOutside(event: any): void {
    if (this.clicked) {
      this._el.nativeElement
        .querySelector('.dropdown-menu')
        .classList.toggle('show');
    }
  }
}
