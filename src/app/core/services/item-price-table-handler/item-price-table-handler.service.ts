import { Injectable,  PipeTransform } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import { SortColumn, SortDirection } from '../../directives/item-price-sortable/item-price-sortable.directive';

export interface Data {
  id: number;
  item: string;
  price:number;
}


export const TESTDATA: Data[] = [
  {
    id: 1,
    item: 'Es Gym Vest',
    price: 200
  },
  {
    id: 2,
    item: 'Alpha Gym Vest',
    price: 200
    
  },
  {
    id: 3,
    item: 'Junior Gym Vest',
    price: 200
  },
  {
    id: 4,
    item: 'Junior Gym Vest -1',
    price: 100
  },
  {
    id: 5,
    item: 'Pant',
    price: 500
  },
  {
    id: 6,
    item: 'Top',
    price: 800
  },
  {
    id: 7,
    item: 'Gym Vest',
    price: 200
  },
  {
    id: 8,
    item: 'Polo Gym Vest',
    price: 300
  },
  {
    id: 9,
    item: 'Cario Junior Gym Vest',
    price: 200
  },
  {
    id: 10,
    item: 'Cario Gym Vest',
    price: 900
  },
  {
    id: 11,
    item: 'Mario Junior Gym Vest',
    price: 200
  },
  {
    id: 12,
    item: 'Marico',
    price: 1200
  },
  {
    id: 13,
    item: 'Traves Junior Gym Vest',
    price: 2200
  }
];

interface SearchResult {
  testdata: Data[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(testdata: Data[], column: SortColumn, direction: string): Data[] {
  if (direction === '' || column === '') {
    return testdata;
  } else {
    return [...testdata].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(data: Data, term: string, pipe: PipeTransform) {
  return data.item.toLowerCase().includes(term.toLowerCase());
}

@Injectable({
  providedIn: 'root'
})
export class ItemPriceTableHandlerService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _testdata$ = new BehaviorSubject<Data[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._testdata$.next(result.testdata);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get testdata$() { return this._testdata$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let testdata = sort(TESTDATA, sortColumn, sortDirection);

    // 2. filter
    testdata = testdata.filter(data => matches(data, searchTerm, this.pipe));
    const total = testdata.length;

    // 3. paginate
    testdata = testdata.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({testdata, total});
  }
}
