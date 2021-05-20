import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewdcComponent } from './newdc/newdc.component';
import { ViewdcComponent } from './viewdc/viewdc.component';
import { NewgrnComponent } from './newgrn/newgrn.component';
import { ViewgrnComponent } from './viewgrn/viewgrn.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

@NgModule({
  declarations: [
    HomeComponent,
    NewdcComponent,
    ViewdcComponent,
    NewgrnComponent,  
    ViewgrnComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    NavbarModule
    ],
})
export class HomeModule {}
