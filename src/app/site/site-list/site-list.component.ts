import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SiteModel } from '../store/site.model';
import { selectAllSites } from '../store/site.selectors';
import { SiteService } from '../site.service';
import { getSitesStartAction } from '../store/site.actions';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css'],
})
export class SiteListComponent implements OnInit {
  columns: string[] = ['id', 'name', 'owner', 'address', 'code', 'actions'];
  sites$: Observable<SiteModel[]> = this.store.pipe(select(selectAllSites));

  constructor(private siteService: SiteService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getSitesStartAction());
  }
}
