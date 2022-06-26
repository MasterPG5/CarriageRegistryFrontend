import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteRoutingModule } from './site-routing.module';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { SiteComponent } from './site/site.component';
import { SiteService } from './site.service';
import { StoreModule } from '@ngrx/store';
import * as SiteStore from './store/site.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SiteEffects } from './store/site.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    StoreModule.forFeature(SiteStore.siteFeatureKey, SiteStore.siteReducer),
    EffectsModule.forFeature([SiteEffects]),
  ],
  declarations: [SiteListComponent, SiteEditComponent, SiteComponent],
  providers: [SiteService],
})
export class SiteModule {}
