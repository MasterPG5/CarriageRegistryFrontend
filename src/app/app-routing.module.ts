import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'carriage',
    loadChildren: () =>
      import('./carriage/carriage.module').then((m) => m.CarriageModule),
  },
  {
    path: 'site',
    loadChildren: () => import('./site/site.module').then((m) => m.SiteModule),
  },
  {
    path: '',
    redirectTo: '/carriage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
