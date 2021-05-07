import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastService.show('Verified!', { classname: 'bg-success text-light', delay: 10000 });
  }
}
