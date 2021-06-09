import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';
import {Observable} from 'rxjs';
import { ItemPriceSortableDirective } from 'src/app/core/directives/item-price-sortable/item-price-sortable.directive';
import { ItemPriceTableHandlerService } from 'src/app/core/services/item-price-table-handler/item-price-table-handler.service';

export interface Data {
  id: number;
  item: string;
  price:number;
}

@Component({
  selector: 'app-item-price-table',
  templateUrl: './item-price-table.component.html',
  styleUrls: ['./item-price-table.component.scss']
})
export class ItemPriceTableComponent{

  constructor(public service: ItemPriceTableHandlerService) {
    this.testdata$ = service.testdata$;
    this.total$ = service.total$;
  }
  public testdata$: Observable<Data[]>;
  total$: Observable<number>;

@ViewChildren(ItemPriceSortableDirective) headers!: QueryList<ItemPriceSortableDirective>;

  onSort({column, direction}: any) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
