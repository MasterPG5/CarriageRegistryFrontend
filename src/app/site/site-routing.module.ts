import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteComponent } from './site/site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: SiteListComponent,
      },
      {
        path: 'edit',
        component: SiteEditComponent,
      },
      {
        path: 'edit/:id',
        component: SiteEditComponent,
      },
    ],
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: SiteListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
