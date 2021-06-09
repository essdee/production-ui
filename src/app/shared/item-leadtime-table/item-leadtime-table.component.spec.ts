import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLeadtimeTableComponent } from './item-leadtime-table.component';

describe('ItemLeadtimeTableComponent', () => {
  let component: ItemLeadtimeTableComponent;
  let fixture: ComponentFixture<ItemLeadtimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLeadtimeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLeadtimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
