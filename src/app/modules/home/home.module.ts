import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HeaderModule,
    ],
})
export class HomeModule {}
