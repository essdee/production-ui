import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceTableComponent } from './item-price-table.component';

describe('ItemPriceTableComponent', () => {
  let component: ItemPriceTableComponent;
  let fixture: ComponentFixture<ItemPriceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPriceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
