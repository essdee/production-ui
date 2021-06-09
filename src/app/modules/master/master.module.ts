import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { SupplierComponent } from './supplier/supplier/supplier.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { ItemPriceTableComponent } from 'src/app/shared/item-price-table/item-price-table.component';
import { ItemLeadtimeTableComponent } from 'src/app/shared/item-leadtime-table/item-leadtime-table.component';
import { ItemPriceTableModule } from 'src/app/shared/item-price-table/item-price-table.module';
import { ItemLeadtimeTableModule } from 'src/app/shared/item-leadtime-table/item-leadtime-table.module';


@NgModule({
  declarations: [
    MasterComponent,
    SupplierComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    NavbarModule,
    TableModule,
    ItemPriceTableModule,
    ItemLeadtimeTableModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
