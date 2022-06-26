import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RequestService } from '../helpers/request.service';
import { Site, SiteModel } from './store/site.model';

const SITE_URL = 'https://localhost:44332/api/Site';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class SiteService {
  constructor(private requestService: RequestService, private store: Store) {}

  getSites(): Observable<Site[]> {
    return this.requestService.get<Site[]>(SITE_URL, httpOptions);
  }

  createSite(site: SiteModel): Observable<any> {
    return this.requestService.put(SITE_URL, site);
  }

  updateSite(site: SiteModel): Observable<any> {
    return this.requestService.put(`${SITE_URL}/${site.id}`, site);
  }

  deleteSite(siteId: number): Observable<any> {
    return this.requestService.delete(`${SITE_URL}/${siteId}`);
  }
}
