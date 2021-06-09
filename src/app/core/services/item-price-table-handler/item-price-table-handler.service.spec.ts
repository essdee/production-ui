import { TestBed } from '@angular/core/testing';

import { ItemPriceTableHandlerService } from './item-price-table-handler.service';

describe('ItemPriceTableHandlerService', () => {
  let service: ItemPriceTableHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemPriceTableHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
