import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';


@NgModule({
  declarations: [
    MasterComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    NavbarModule
  ]
})
export class MasterModule { }
