import { Injectable } from '@angular/core';
import { RequestService } from '../helpers/request.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Carriage, CarriageModel } from './store/carriage.model';

const CARRIAGE_URL = 'localhost:44332/api/Carriage';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class CarriageService {
  constructor(private requestService: RequestService, private store: Store) {}

  getCarriages(): Observable<Carriage[]> {
    return this.requestService.get<Carriage[]>(CARRIAGE_URL, httpOptions);
  }

  getAllCarriages(): Observable<Carriage[]> {
    return this.requestService.get<Carriage[]>(
      `${CARRIAGE_URL}/All`,
      httpOptions
    );
  }

  getCarriagesForSite(siteId: number): Observable<Carriage[]> {
    return this.requestService.get<Carriage[]>(
      `${CARRIAGE_URL}/Site/${siteId}`,
      httpOptions
    );
  }

  createCarriage(carriage: CarriageModel): Observable<any> {
    return this.requestService.put(`${CARRIAGE_URL}`, carriage);
  }

  updateCarriage(carriage: CarriageModel): Observable<any> {
    return this.requestService.put(`${CARRIAGE_URL}/${carriage.id}`, carriage);
  }

  deleteCarriage(carriageId: number): Observable<any> {
    return this.requestService.delete(`${CARRIAGE_URL}/${carriageId}`);
  }
}
