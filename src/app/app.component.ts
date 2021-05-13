import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './services/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'production-ui';
  constructor(
    public toastService: ToastService) {}
  showSuccess(successTpl: string | TemplateRef<any>) {
    this.toastService.show(successTpl, {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true
    });
  }

  showDanger(dangerTpl: string | TemplateRef<any>) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 5000 });
  }
}
