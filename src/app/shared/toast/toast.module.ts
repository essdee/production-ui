import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { ToastComponent } from './toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [ NgbToastModule, CommonModule ],
  exports: [ToastComponent],
  providers: [ ToastService ]
})
export class ToastModule {}
