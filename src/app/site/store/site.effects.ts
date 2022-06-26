import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SiteService } from '../site.service';
import { getSitesEndAction, SiteActionTypes } from './site.actions';

@Injectable()
export class SiteEffects {
  getSites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SiteActionTypes.getSitesStart),
      mergeMap(() =>
        this.siteService.getSites().pipe(
          map((sites) => {
            console.log(sites);
            return getSitesEndAction({ sites });
          }),
          catchError(() => {
            console.log('Hey');
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private siteService: SiteService,
    private store: Store
  ) {}
}
