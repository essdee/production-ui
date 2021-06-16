import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { ManufacturingComponent } from './manufacturing.component';
import { NewdcComponent } from './newdc/newdc.component';
import { ViewdcComponent } from './viewdc/viewdc.component';
import { NewgrnComponent } from './newgrn/newgrn.component';
import { ViewgrnComponent } from './viewgrn/viewgrn.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { PurchaseOrderListComponent } from './purchase-order/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order/purchase-order.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    ManufacturingComponent,
    NewdcComponent,
    ViewdcComponent,
    NewgrnComponent,
    ViewgrnComponent,
    PurchaseOrderListComponent,
    PurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    NavbarModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class ManufacturingModule { }
