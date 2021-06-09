import { Component, PipeTransform, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface Data {
  supplier: string;
}

export const TESTDATA: Data[] = [
  {supplier:'Aest'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Aest'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Aest'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'},
  {supplier:'Test'}]


export type SortColumn = keyof Data | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

function search(text: string, pipe: PipeTransform): Data[] {
  return TESTDATA.filter(val => {
    const term = text.toLowerCase();
    return val.supplier.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss'],
  providers: [DecimalPipe]
})


export class SupplierListComponent implements OnInit {
  testdata$!: Observable<Data[]>;
  filter = new FormControl('');
  page = 1;
  pageSize = 20;
  collectionSize = TESTDATA.length;
 
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  testdata = TESTDATA;
  constructor(
    private router: Router, pipe: DecimalPipe) {
      this.refreshTableData();
      this.testdata$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => search(text, pipe))
      );
     }

  ngOnInit(): void {
  }

  refreshTableData() {
    this.testdata = TESTDATA
      .map((val, i) => ({id: i + 1, ...val}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
            this.testdata = TESTDATA;
          } else {
            this.testdata = [...TESTDATA].sort((a, b) => {
              const res = compare(a[column], b[column]);
              return direction === 'asc' ? res : -res;
            });
          }
        }

  navigateToSupplier(){
    var previous_url = this.router.url.substr(this.router.url.lastIndexOf('/') + 1) + '$';
    var current_url = this.router.url.replace( new RegExp(previous_url), 'new-supplier' );
    this.router.navigateByUrl(current_url);
  }

}
