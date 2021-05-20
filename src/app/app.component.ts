import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './core/services/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'production-ui';
  constructor(
    public toastService: ToastService) {}
}
