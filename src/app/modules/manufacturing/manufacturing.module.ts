import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { ManufacturingComponent } from './manufacturing.component';
import { NewdcComponent } from './newdc/newdc.component';
import { ViewdcComponent } from './viewdc/viewdc.component';
import { NewgrnComponent } from './newgrn/newgrn.component';
import { ViewgrnComponent } from './viewgrn/viewgrn.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';


@NgModule({
  declarations: [
    ManufacturingComponent,
    NewdcComponent,
    ViewdcComponent,
    NewgrnComponent,
    ViewgrnComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    NavbarModule
  ]
})
export class ManufacturingModule { }
