import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe  } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemLeadtimeTableComponent } from './item-leadtime-table.component';
import { ItemLeadtimeSortbaleDirective } from 'src/app/core/directives/item-leadtime-sortbale/item-leadtime-sortbale.directive';
import { ItemLeadtimeTableHandlerService } from 'src/app/core/services/item-leadtime-table-handler/item-leadtime-table-handler.service';

@NgModule({
  declarations: [
    ItemLeadtimeTableComponent,
    ItemLeadtimeSortbaleDirective
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
    ],
  providers: [ ItemLeadtimeTableHandlerService,DecimalPipe ],
  exports: [ItemLeadtimeTableComponent],
  bootstrap: [ItemLeadtimeTableComponent]
})
export class ItemLeadtimeTableModule { }
