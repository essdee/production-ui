import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemComponent } from './item/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    MasterComponent,
    SupplierComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    NavbarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class MasterModule { }
