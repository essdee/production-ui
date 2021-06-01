import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'master', loadChildren: () => import('../master/master.module').then((m) => m.MasterModule),},
      { path: 'mfg', loadChildren: () => import('../manufacturing/manufacturing.module').then((m) => m.ManufacturingModule),},
      { path: '', redirectTo: 'master', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
