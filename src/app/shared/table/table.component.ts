import { Component, OnInit } from '@angular/core';

interface TableData {
  id?: number;
  supplier: string;
  total_amount: number;
}

//Test Data
const Data: TableData[] = [
  {
    supplier: 'Test 1',
    total_amount: 10000
  },
  {
    supplier: 'Test 2',
    total_amount: 10000
  },
  {
    supplier: 'Test 3',
    total_amount: 10000
  },
  {
    supplier: 'Test 4',
    total_amount: 10000
  },
  {
    supplier: 'Test 5',
    total_amount: 10000
  },
  {
    supplier: 'Test 6',
    total_amount: 10000
  },
  {
    supplier: 'Test 7',
    total_amount: 10000
  },
  {
    supplier: 'Test 8',
    total_amount: 10000
  },
  {
    supplier: 'Test 9',
    total_amount: 10000
  },
  {
    supplier: 'Test 10',
    total_amount: 10000
  },
  {
    supplier: 'Test 11',
    total_amount: 10000
  },
  {
    supplier: 'Test 12',
    total_amount: 10000
  },
  {
    supplier: 'Test 21',
    total_amount: 10000
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = Data.length;
  data: TableData[] | undefined;

  constructor() { 
    this.refreshData();
  }

  ngOnInit(): void {
  }
  refreshData() {
    this.data = Data
      .map((d, i) => ({id: i + 1, ...d}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}