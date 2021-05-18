import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TableComponent } from 'src/app/shared/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NewdcComponent } from './newdc/newdc.component';
import { ViewdcComponent } from './viewdc/viewdc.component';
import { NewgrnComponent } from './newgrn/newgrn.component';
import { ViewgrnComponent } from './viewgrn/viewgrn.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, TableComponent, HeaderComponent, NewdcComponent, ViewdcComponent, NewgrnComponent, ViewgrnComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ],
})
export class HomeModule {}
