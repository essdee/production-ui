import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturingComponent } from './manufacturing.component';
import { NewdcComponent } from './newdc/newdc.component';
import { NewgrnComponent } from './newgrn/newgrn.component';
import { PurchaseOrderListComponent } from './purchase-order/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order/purchase-order.component';
import { ViewdcComponent } from './viewdc/viewdc.component';
import { ViewgrnComponent } from './viewgrn/viewgrn.component';

const routes: Routes = [
  {
    path: '',
    component: ManufacturingComponent,
    children: [
      { path: 'newdc', component: NewdcComponent },
      { path: 'viewdc', component: ViewdcComponent },
      { path: 'newgrn', component: NewgrnComponent },
      { path: 'viewgrn', component: ViewgrnComponent },
      { path: 'purchase-order/purchase-order-list', component: PurchaseOrderListComponent },
      { path: 'purchase-order/new-purchase-order', component: PurchaseOrderComponent },
      { path: '', redirectTo: 'newdc', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingRoutingModule { }
