import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarriageListComponent } from './carriage-list/carriage-list.component';
import { CarriageEditComponent } from './carriage-edit/carriage-edit.component';
import { CarriageComponent } from './carriage/carriage.component';

const routes: Routes = [
  {
    path: '',
    component: CarriageComponent,
    children: [
      {
        path: '',
        component: CarriageListComponent,
      },
      {
        path: 'edit',
        component: CarriageEditComponent,
      },
      {
        path: 'edit/:id',
        component: CarriageEditComponent,
      },
    ],
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: CarriageListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarriageRoutingModule {}
