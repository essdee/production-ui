import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemComponent } from './item/item/item.component';
import { MasterComponent } from './master.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: 'supplier', component: SupplierComponent },
      { path: 'item/item-list', component: ItemListComponent },
      { path: 'item/new-item', component: ItemComponent },
      { path: '', redirectTo: 'supplier', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
