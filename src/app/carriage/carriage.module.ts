import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarriageListComponent } from './carriage-list/carriage-list.component';
import { CarriageRoutingModule } from './carriage-routing.module';
import { CarriageEditComponent } from './carriage-edit/carriage-edit.component';
import { CarriageComponent } from './carriage/carriage.component';
import { CarriageService } from './carriage.service';

@NgModule({
  imports: [CommonModule, RouterModule, CarriageRoutingModule],
  declarations: [
    CarriageListComponent,
    CarriageEditComponent,
    CarriageComponent,
  ],
  providers: [CarriageService],
})
export class CarriageModule {}
