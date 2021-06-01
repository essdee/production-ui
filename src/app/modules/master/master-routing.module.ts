import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: 'supplier', component: SupplierComponent },
      { path: '', redirectTo: 'supplier', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
