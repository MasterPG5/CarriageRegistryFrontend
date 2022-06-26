import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestService } from './helpers/request.service';
//import { CarriageFeatureState } from './carriage/store/carriage.reducer';
import { SiteFeatureState } from './site/store/site.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

export interface AppState {
  //carriageFeature: CarriageFeatureState;
  siteFeature: SiteFeatureState;
}

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [RequestService],
})
export class AppModule {}
