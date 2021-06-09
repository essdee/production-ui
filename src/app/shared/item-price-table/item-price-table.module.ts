import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemPriceTableComponent } from './item-price-table.component';
import { ItemPriceTableHandlerService } from 'src/app/core/services/item-price-table-handler/item-price-table-handler.service';
import { ItemPriceSortableDirective } from 'src/app/core/directives/item-price-sortable/item-price-sortable.directive';



@NgModule({
  declarations: [
    ItemPriceTableComponent,
    ItemPriceSortableDirective
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
    ],
  providers: [ ItemPriceTableHandlerService,DecimalPipe ],
  exports: [ItemPriceTableComponent],
  bootstrap: [ItemPriceTableComponent]
})
export class ItemPriceTableModule { }