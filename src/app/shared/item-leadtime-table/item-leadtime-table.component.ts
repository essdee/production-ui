import { Component, OnInit,  QueryList, ViewChildren } from '@angular/core';
import {Observable} from 'rxjs';
import { ItemLeadtimeSortbaleDirective } from 'src/app/core/directives/item-leadtime-sortbale/item-leadtime-sortbale.directive';
import { ItemLeadtimeTableHandlerService } from 'src/app/core/services/item-leadtime-table-handler/item-leadtime-table-handler.service';

export interface Data {
  id: number;
  item: string;
  leadtime:string;
}
@Component({
  selector: 'app-item-leadtime-table',
  templateUrl: './item-leadtime-table.component.html',
  styleUrls: ['./item-leadtime-table.component.scss']
})
export class ItemLeadtimeTableComponent  {

  constructor(public service: ItemLeadtimeTableHandlerService) {
    this.testdata$ = service.testdata$;
    this.total$ = service.total$;
  }
  public testdata$: Observable<Data[]>;
  total$: Observable<number>;

@ViewChildren(ItemLeadtimeSortbaleDirective) headers!: QueryList<ItemLeadtimeSortbaleDirective>;

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