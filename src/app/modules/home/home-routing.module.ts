import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewdcComponent } from './newdc/newdc.component';
import { NewgrnComponent } from './newgrn/newgrn.component';
import { ViewdcComponent } from './viewdc/viewdc.component';
import { ViewgrnComponent } from './viewgrn/viewgrn.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'newdc', component: NewdcComponent },
      { path: 'viewdc', component: ViewdcComponent },
      { path: 'newgrn', component: NewgrnComponent },
      { path: 'viewgrn', component: ViewgrnComponent },
      { path: '', redirectTo: 'newdc', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
