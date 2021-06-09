import { TestBed } from '@angular/core/testing';

import { ItemLeadtimeTableHandlerService } from './item-leadtime-table-handler.service';

describe('ItemLeadtimeTableHandlerService', () => {
  let service: ItemLeadtimeTableHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemLeadtimeTableHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
