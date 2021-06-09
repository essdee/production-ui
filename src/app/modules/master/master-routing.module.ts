import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierComponent } from './supplier/supplier/supplier.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: 'supplier/supplier-list', component: SupplierListComponent },
      { path: 'supplier/new-supplier', component: SupplierComponent },
      { path: '', redirectTo: 'supplier/supplier-list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
